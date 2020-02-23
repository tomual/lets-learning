<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Posting extends MY_Controller {

	public function view($job_id)
	{
		$this->load->model('job_model');
		$job = $this->job_model->get($job_id);

		set_title($job->title);
		$this->load->view('job/view', compact('job'));
	}

	public function apply($job_id)
	{
		$this->load->model('apply_model');
		$this->load->model('job_model');
		$job = $this->job_model->get($job_id);

		if ($this->input->method() == 'post') {
			$this->form_validation->set_rules('name', 'Name', 'required');
			$this->form_validation->set_rules('email', 'Email', 'required');
			$this->form_validation->set_rules('phone', 'Phone', 'required');
			$this->form_validation->set_rules('cover', 'Cover Letter', 'required');

			$config = array(
				'upload_path' => './uploads/',
				'file_name' => $job_id . "-" . date('YmdHis'),
				'allowed_types' => 'xml|jpg',
				'max_size' => 10000,
			);
			$this->load->library('upload', $config);

			if ($this->upload->do_upload('resume')) {
				$upload_data = $this->upload->data();
			} else {
				$this->form_validation->set_rules('resume', 'Resume', 'required', array('required' => $this->upload->display_errors()));
			}

			if ($this->form_validation->run() !== FALSE) {
				$data = array(
					'name' => $this->input->post('name'),
					'email' => $this->input->post('email'),
					'phone' => $this->input->post('phone'),
					'cover' => $this->input->post('cover'),
					'resume_path' => $upload_data['full_path']
				);
				$application_id = $this->apply_model->create($data);
				if ($application_id) {
					$this->session->set_flashdata('application_id', $application_id);
					redirect('posting/apply_success/' . $job->id);
				}
			}
		}

		set_title('Apply');
		$this->load->view('job/apply', compact('job'));
	}

	public function apply_success($job_id)
	{
		$this->load->model('job_model');
		$job = $this->job_model->get($job_id);
		
		set_title('Application Submitted');
		$this->load->view('job/apply-success', compact('job'));
	}
}
