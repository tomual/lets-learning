<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Job extends Authenticated_Controller {

	public function index()
	{
		$this->all();
	}

	public function all()
	{
		$this->load->model('job_model');
		$jobs = $this->job_model->get_all($this->user->id);

		set_title('Post Job');
		$this->load->view('job/all', compact('jobs'));
	}

	public function post()
	{
		$this->load->model('job_model');

		if ($this->input->method() == 'post') {
			$this->form_validation->set_rules('title', 'Title', 'required');
			$this->form_validation->set_rules('location', 'Location', 'required');
			$this->form_validation->set_rules('description', 'Description', 'required');

			if ($this->form_validation->run() !== FALSE) {
				$data = array(
					'title' => $this->input->post('title'),
					'location' => $this->input->post('location'),
					'description' => $this->input->post('description'),
					'created_by' => $this->user->id
				);
				$job_id = $this->job_model->create($data);
				if ($job_id) {
					redirect("posting/view/$job_id");
				}
			}
		}

		set_title('Post Job');
		$this->load->view('job/post');
	}
}
