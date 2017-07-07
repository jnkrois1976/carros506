<?php
// defined('BASEPATH') OR exit('No direct script access allowed');

class Api_model extends CI_Model {

	public function get(){
		$sql = "SELECT DISTINCT make, model, year FROM make_model_year WHERE make='acura' AND year='2015'";
		$query = $this->db->query($sql);
		return json_encode($query->result_array());
	}
}
