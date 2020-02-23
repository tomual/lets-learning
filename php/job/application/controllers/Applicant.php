<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Applicant extends Authenticated_Controller {

	public function index()
	{
		$this->all();
	}

	public function all()
	{
		$this->load->model('apply_model');
		$applicants = $this->apply_model->get_all($this->user->id);

		set_title('Post Job');
		$this->load->view('applicant/all', compact('applicants'));
	}

	public function view()
	{
		$this->load->model('apply_model');
		set_title('Post applicant');
		$this->load->view('applicant/view');
	}
}
