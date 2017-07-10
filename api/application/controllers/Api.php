<?php
defined('BASEPATH') OR exit('No direct script access allowed');
if($_SERVER['HTTP_ORIGIN'] == "http://localhost:4200") {
	header('Access-Control-Allow-Origin: http://localhost:4200');
    header('Content-type: application/json');
	class Api extends CI_Controller {

		public function get(){
			$this->load->model('api_model');
			$test = $this->api_model->get();
			echo $test;
		}
	}
}


