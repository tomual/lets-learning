<?php $this->load->view('header') ?>

<div class="container">
	<div class="row">
		<div class="col">
			<h1 class="page-title py-5">
				Jobs
			</h1>
		</div>
		<div class="col-12">
			<a href="<?php echo base_url('job/post') ?>" class="btn btn-primary mb-5"><i class="fe fe-plus"></i> New Post</a>
			<div class="card">
				<div class="card-header">
					All Jobs
				</div>
				<table class="table card-table">
					<tr>
						<th>Title</th>
						<th>Post Date</th>
						<th></th>
					</tr>
					<?php foreach ($jobs as $job): ?>
					<tr>
						<td><a href=""><?php echo $job->title ?></a></td>
						<td><?php echo date('j M, Y', strtotime($job->created)) ?></td>
						<td class="text-right"><a href="" class="btn btn-sm btn-secondary"><i class="fe fe-edit-2"></i> Edit</a> <a href="" class="btn btn-sm btn-secondary"><i class="fe fe-x"></i> Close</a></td>
					</tr>
					<?php endforeach ?>
				</table>
			</div>
		</div>
	</div>
</div>
<?php $this->load->view('footer') ?>