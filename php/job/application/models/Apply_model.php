<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Apply_model extends CI_Model {

	public function get_all($user_id)
	{
		$this->db->select('applications.*');
		$this->db->where('jobs.created_by', $user_id);
		$this->db->join('jobs', 'jobs.id = applications.job_id');
		$this->db->from('applications');
		$applications = $this->db->get()->result();
		return $applications;
	}

	public function get($application_id)
	{
		$this->db->where('applications.id', $application_id);
		$this->db->from('applications');
		$job = $this->db->get()->first_row();
		return $job;
	}

    public function create($data) {
    	$this->db->insert('applications', $data);
    	return $this->db->insert_id();
    }
}
