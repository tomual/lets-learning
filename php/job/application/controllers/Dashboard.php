<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Dashboard extends Authenticated_Controller {

	public function index()
	{
        set_title('Dashboard');
		$this->load->view('dashboard');
	}
}
