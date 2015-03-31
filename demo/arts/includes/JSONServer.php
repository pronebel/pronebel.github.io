<?php

class JSONServer {

	private static $apiServerType;

	private $server_url;

	/**
	 * Initialize a JSON Server proxy
	 */
	function __construct() {

		$type = self::$apiServerType;

			$this->server_url = $type;
	}

	public static function setApiServerType($type) {

		self::$apiServerType = $type;
	}

	/**
	 * Send json request to server, and return the decoded json data array
	 * @param array $json_data json request data array.
	 * @param boolean $returnArr if the returned the data is array or object. default is array
	 * @return return false if failed. return decoded json data array response if success.
	 */
	function call($json_data, $returnArr=TRUE) {

		if (!is_array($json_data)) {
			throw new Exception("json_data data format error - not a array");
		}

		if (!isset ( $json_data ['cmd'] )) {
			throw new Exception("json_data data format error - cmd field is missing");
		}

		$content = 'json=' . urlencode(json_encode($json_data));
// 		$content = 'json=%7B%22data%22%3A%7B%22vid%22%3A%221904372323%22%2C%22week_start%22%3A%221%22%2C%22month_start%22%3A%221%22%2C%22custom_days%22%3A%227%22%2C%22compare%22%3A%221%22%2C%22del_robot%22%3A0%7D%2C%22cmd%22%3A%22user_setting%22%7D';
// 		print_r(json_encode($json_data));
		//connect json server and make request/response
		//$cookie = sprintf ( "SUP=%s;SUE=%s", urlencode($_COOKIE['SUP']), urlencode($_COOKIE['SUE']) );
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_URL, $this->server_url . (isset($_GET['profile']) ? '?XDEBUG_PROFILE=1' : ''));
		
		curl_setopt($ch, CURLOPT_POST, TRUE);
		curl_setopt($ch, CURLOPT_POSTFIELDS, $content);
		//curl_setopt($ch, CURLOPT_COOKIE, $cookie);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
		$rsp = curl_exec($ch);
// 		print_r($rsp);
		curl_close($ch);

		$ret = json_decode($rsp, $returnArr);
		if ($ret == null) {
			$ret = $rsp;
		}
		return $ret;
	}
	/**
	 * Send json image request to server, and return the decoded json data array
	 * If $json_data doesn't match spec definition, an exception will be thrown. For data format, please visit dev wiki
	 * @param array $content json request data array.
	 * @param array $picfile picture $_FILES['file']
	 * @param boolean $returnArr if the returned the data is array or object. default is array
	 * @return return false if failed. return decoded json data array response if success.
	 */
	function sendBinaryCall($content, $picfile, $returnArr=TRUE) {
		if (!is_array($content)) {
			throw new Exception("json_data data format error - not a array");
		}

		if (!isset ( $content ['cmd'] )) {
			throw new Exception("json_data data format error - cmd field is missing");
		}

		$boundray = time ();
		$h = array ();
		$m_line = "\r\n";

		//准备头和文档
		$h [] = "Content-Type:  multipart/form-data; boundary=" . $boundray;
		$h [] = "Connection: Keep-Alive";
		$content = json_encode($content);
		$t = array ();
		$t [] = "--" . $boundray;
		$t [] = "Content-Disposition: form-data; name=\"UPLOAD_IDENTIFIER\"" . $m_line;
		$t [] = "34f4eec9d2922ab59d23c8b02291dd4f";
		$t [] = "--" . $boundray;
		$t [] = "Content-Disposition: form-data; name=\"json\"" . $m_line;
		$t [] = $content;
		$t [] = "--" . $boundray;
		$t [] = "Content-Disposition: form-data; name=\"File_1\"; filename=\"{$picfile ['name']}\"";
		$t [] = "Content-Type: image/jpeg" . $m_line . $m_line;
		$c = implode ( $m_line, $t );
		//准备二进制内容
		$upload_fp = fopen ( $picfile ['tmp_name'], "rb" );
		while ( ! @feof ( $upload_fp ) ) {
			$file_piece = @fread ( $upload_fp, 4096 );
			$c .= $file_piece;
		}
		fclose ( $upload_fp );
		$c .= $m_line . "--" . $boundray;

		$ch = curl_init();
		curl_setopt($ch, CURLOPT_URL, $this->server_url);
		curl_setopt ( $ch, CURLOPT_HTTPHEADER, $h );
		curl_setopt($ch, CURLOPT_POST, TRUE);
		curl_setopt($ch, CURLOPT_POSTFIELDS, $c);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
		$rsp = curl_exec($ch);
		curl_close($ch);

		$ret = json_decode($rsp, $returnArr);
		if ($ret == null) {
			$ret = $rsp;
		}
		return $ret;
	}

	/**
	 * Send json image request to server, and return the decoded json data array
	 * If $json_data doesn't match spec definition, an exception will be thrown. For data format, please visit dev wiki
	 * @param array $content json request data array.
	 * @param array $picdata binary stream
	 * @param boolean $returnArr if the returned the data is array or object. default is array
	 * @return return false if failed. return decoded json data array response if success.
	 */
	function sendRawBinaryCall($content, $picdata, $returnArr=TRUE) {
		if (!is_array($content)) {
			throw new Exception("json_data data format error - not a array");
		}

		if (!isset ( $content ['cmd'] )) {
			throw new Exception("json_data data format error - cmd field is missing");
		}

		$boundray = time ();
		$h = array ();
		$m_line = "\r\n";

		//准备头和文档
		$h [] = "Content-Type:  multipart/form-data; boundary=" . $boundray;
		$h [] = "Connection: Keep-Alive";
		$content = json_encode($content);
		$t = array ();
		$t [] = "--" . $boundray;
		$t [] = "Content-Disposition: form-data; name=\"UPLOAD_IDENTIFIER\"" . $m_line;
		$t [] = "34f4eec9d2922ab59d23c8b02291dd4f";
		$t [] = "--" . $boundray;
		$t [] = "Content-Disposition: form-data; name=\"json\"" . $m_line;
		$t [] = $content;
		$t [] = "--" . $boundray;
		$t [] = "Content-Disposition: form-data; name=\"File_1\"; filename=\"{$boundray}\"";
		$t [] = "Content-Type: image/jpeg" . $m_line . $m_line;
		$c = implode ( $m_line, $t );

		//准备二进制内容
		$c .= $picdata;
		$c .= $m_line . "--" . $boundray;

		$ch = curl_init();
		curl_setopt($ch, CURLOPT_URL, $this->server_url);
		curl_setopt ( $ch, CURLOPT_HTTPHEADER, $h );
		curl_setopt($ch, CURLOPT_POST, TRUE);
		curl_setopt($ch, CURLOPT_POSTFIELDS, $c);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
		$rsp = curl_exec($ch);
		curl_close($ch);

		$ret = json_decode($rsp, $returnArr);
		if ($ret == null) {
			$ret = $rsp;
		}

		return $ret;
	}
}
