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
		set_title('Post Job');
		$this->load->view('job/post');
	}

	public function view()
	{
		$this->load->model('apply_model');
		set_title('Post Job');
		$this->load->view('job/post');
	}
}
