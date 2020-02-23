<?php $this->load->view('header-naked') ?>

<div class="container">
	<div class="row">
		<div class="col-lg-8 offset-lg-2 mt-5">
			<div class="card p-5 job-card">
				<div class="card-body">
					<h1><?php echo $job->title ?></h1>
					<div class="location pt-2"><i class="fe fe-map-pin text-blue-lighter"></i> <?php echo $job->location ?></div>
					<div class="company pt-2"><i class="fe fe-briefcase text-blue-lighter"></i> <?php echo $job->company_name ?></div>
					<div class="description pt-5"><?php echo $job->description ?></div>
					<a href="<?php echo base_url("posting/apply/$job->id") ?>" class="btn btn-lg btn-primary mt-5">Apply</a>
				</div>
			</div>
		</div>
	</div>
</div>
<?php $this->load->view('footer') ?>