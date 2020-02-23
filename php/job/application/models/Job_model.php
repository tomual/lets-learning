<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Job_model extends CI_Model {

	public function get_all($user_id)
	{
		$this->db->where('jobs.created_by', $user_id);
		$this->db->from('jobs');
		$jobs = $this->db->get()->result();
		return $jobs;
	}

	public function get($job_id)
	{
		$this->db->select('jobs.*');
		$this->db->where('jobs.id', $job_id);
		$this->db->from('jobs');
		$this->db->select('company_name');
		$this->db->join('users', 'users.id = jobs.created_by', 'left');
		$job = $this->db->get()->first_row();
		return $job;
	}

    public function create($data) {
    	$this->db->insert('jobs', $data);
    	return $this->db->insert_id();
    }
}
