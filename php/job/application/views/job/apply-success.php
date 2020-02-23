<?php $this->load->view('header-naked') ?>

<div class="container">
	<div class="row">
		<div class="col-lg-6 offset-lg-3 mt-5">
			<div class="card p-5">
				<div class="card-body">
					<h1>Application Submitted</h1>
					<h5 class="py-5"><?php echo $job->title ?></h5>
					<p>Thank you for applying for the position <?php echo $job->title ?>.</p>
					<p>Your application ID is: <?php echo $this->session->flashdata('application_id') ?></p>
					<a href="<?php echo base_url('posting/view/' . $job->id) ?>" class="btn btn-primary mt-3">Go back to posting</a>
				</div>
			</div>
		</div>
	</div>
</div>
<?php $this->load->view('footer') ?>