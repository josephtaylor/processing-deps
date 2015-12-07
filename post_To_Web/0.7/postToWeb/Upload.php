<?

// Constants since these parameters are unlikely to change on each call...
// Maximum 100 chars for file name in input, after filtering
define('MAX_FILE_NAME_LENGTH', 100);
// Roughly 2MB
define('MAX_FILE_SIZE', 2000000);

// Where ever your save folder is located - from the place this file is places - no leading slash
$destDir = 'saved/';

// Folder from the root - for using the popup function
$rootDir = '/';

/**
 * Handle an upload field/file.
 * Reject files too big (constant MAX_FILE_SIZE), filter out uploaded file name
 * (remove path, reduce charset, reject incorrect file types (actually, extensions),
 * truncate given name), then prepend unique identifier (date/time, good for sorting)
 * and move the uploaded file to the given directory.
 *
 * @param $fieldName   the name of the input type="file" tag in HTML.
 *        There can be several such inputs in a form.
 * @param $destinationDir   where to put the uploaded file (absolute path).
 *        Might be always the same place or depend on other parameters like a login name.
 * @param $allowedExtensions   an array looking like array('.png', '.gif', '.jpg', '.jpeg')
 * @return An array with two elements. If error, the first element is an empty string,
 *         the second one is the error message. Otherwise, the first element is the file name
 *         and the second one is the uploaded file path.
 */

function HandleUploadedFile($fieldName, $destinationDir, $allowedExtensions)
{
	global $debugData; // To trace actions. Comment out the lines with this variable for real use
    if (isset($_FILES[$fieldName]))
    {
        // Handle error code
        $error = $_FILES[$fieldName]['error'];
        switch ($error)
        {
        case UPLOAD_ERR_OK: // zero
            break;  // No error, continue process
        case UPLOAD_ERR_INI_SIZE: // 1
        case UPLOAD_ERR_FORM_SIZE: // 2
            return array('', 'File too big!'); // The Web page should indicate upfront the maximum size...
        case UPLOAD_ERR_PARTIAL: // 3
            return array('', 'Incomplete upload, please retry.');
        case UPLOAD_ERR_NO_FILE: // 4
            return array('', 'No file! Give a file in the upload field...');
        case UPLOAD_ERR_TMP_DIR: // 6 - No temp folder! :(
        case UPLOAD_ERR_CANT_WRITE: // 7 - Can't write! chmod error?
            return array('', 'Bad server config! Sorry...');
        case UPLOAD_ERR_EXTENSION: // 8 - File upload stopped by extension
            return array('', 'Bad file extension.');
        default:    // Future version of PHP?
            return array('', "Error when uploading: $error");
        }

        // Check size of uploaded file
        $tempLocation = $_FILES[$fieldName]['tmp_name'];
        $debugData .= "Uploaded file is in: $tempLocation<br>\n";
        $debugData .= "Other info given by browser (size, type): {$_FILES[$fieldName]['size']}, {$_FILES[$fieldName]['type']}<br>\n";
        $fileSize = filesize($tempLocation);
        $debugData .= "Real file size: $fileSize<br>\n";
        // Strangely enough, if IE is given a path leading to nowhere, it just sends a 0 byte file!
        if ($fileSize == 0) // Might test a minimum size (smallest header size for graphics...)
        {
            return array('', 'File is empty!');
        }
        if ($fileSize > MAX_FILE_SIZE)
        {
            return array('', 'File too big!');
        }

        // Get original file name
        $file = $_FILES[$fieldName]['name'];
        $debugData .= "Original file name: $file<br>\n"; // No HTML escape! :(
        // Strip out the path (given by IE, perhaps other browsers -- Firefox and Opera just give the name)
        // Most samples I saw use basename() but I found out that it fails to strip a Windows path on a Unix server
        // I could have used a str_replace, but I like REs...
        // (I gobble anything up to the last sequence of characters not having slash or anti-slash in it)
        // Note: ensure magic quotes are disabled or neutralized
        $file = preg_replace('!.*?([^\\/]+)$!', '$1', $file);
        $debugData .= "Filter 1: $file<br>\n";
        // Filter out all characters that are not alphanumerical, dot and dash
        // as they can be troublesome in some OSes.
        // A sequence of such chars is replaced by a unique underscore.
        $file = preg_replace('/[^a-zA-Z0-9.-]+/', '_', $file);
        $debugData .= "Filter 2: $file<br>\n";
        // Split name and extension: gobble everything up to the last dot (file name), then dot and remainder (extension)
        // Note that .htaccess has no extension and is a pure filename
        if (preg_match('/^(.+)\.([^.]+)$/', $file, $m) == 0)
        {
            // No match => No dot or nothing before the dot
            $extension = '';
        }
        else
        {
            $file = $m[1];
            $extension = $m[2];
        }
        $debugData .= "Split: $file $extension<br>\n";
        // Ensure name isn't too long: just truncate it
        $file = substr($file, 0, MAX_FILE_NAME_LENGTH);
        $debugData .= "Truncated: $file<br>\n";
        // If extension not allowed (could be a CGI file...), discard it
        if ($extension != '' && !in_array($extension, $allowedExtensions))
        {
            return array('', 'File format not allowed.');
        }

        // Add trailing slash to dest dir, supposed in Unix format
        // (if not slash at end, replace last char by itself followed by a slash)
        $destinationDir = preg_replace('!([^/])$!', '$1/', $destinationDir);

		if(!file_exists($destinationDir)){
			if(!mkdir_recursive($destinationDir, 0777)){
				return array('', 'Cannot create project folder.' . " (dest.: $destinationDir)");
			}
			chmod($destinationDir, 0777);
		}
        // Create a time stamp used as prefix to make the file name unique.
        // Might have a conflict if you have millions of users, ie. a probability of having two users
        // uploading a file in the same second, supposing they go in the same dir.
        // If so, you are able to improve this code! ;-)
        // One might want to pass a prefix (or suffix) parameter to this function, eg. to tag the file name
        // with the name of the author. Just do it!

		
		$prefix = date('Ymd-His-');
		//$prefix = '';
		
		$destinationFile = $prefix . $file . ($extension != '' ? '.' . $extension : '');
        $debugData .= "Destination file: $destinationFile<br>\n";
        $destinationPath = $destinationDir . $destinationFile;
        $debugData .= "Destination path: $destinationPath<br>\n";
        // Move uploaded file from temporary folder to destination
        // Overwrite a file of same name there, if any (unless, perhaps server is on Windows, might just fail to move).
//        if (!file_exists($destinationFile))
//        {
            if (!move_uploaded_file($tempLocation, $destinationPath))
            {
                return array('', 'Failed to move upload file.' . " (dest.: $destinationPath)");
            }
		 chmod($destinationDir.$destinationFile, 0777);
		 return array($destinationFile, $destinationPath);
//        }
    }
    else
    {
        return array('', 'Field not found');
    }
}

function mkdir_recursive($pathname, $mode)
{
    is_dir(dirname($pathname)) || mkdir_recursive(dirname($pathname), $mode);
    return is_dir($pathname) || @mkdir($pathname, $mode);
}

$debugData = '';

// Get the title
foreach($_FILES as $title=>$file){
	break;
}
unset($file); // just to be sure

$destDir .= $title.'/';


/*
$maxFiles = 1000;   // Max number of files accepted in the dest dir

// First, check if we don't have too much files. Not a bad test: since we fix the max size of files, the max total size of the files
// is under control.

$files = @scandir($destDir); 
if(is_array($files)){
	$files = array_slice($files, 2);    // Shift out . and ..
	while (count($files) > $maxFiles)
	{
	    $file = array_shift($files);
	    echo $file . " to remove\n";
	    unlink($destDir . '/' . $file);
	}
}
*/

$result = HandleUploadedFile($title, './'.$destDir, array('png', 'gif', 'jpg', 'jpeg', 'pdf','ps','tiff','tif', 'txt'));
/*
if ($debugData != '')
{
    echo "<p><b>Debug data:</b><br>$debugData</p>\n";
}
*/
if ($result[0] == '')
{
    echo "<p><b>Error:</b> {$result[1]}</p>\n";
}
else
{
    $imageURL = 'http://' . $_SERVER['SERVER_NAME'] . $rootDir . $destDir . $result[0];
    echo $imageURL;
}
?>