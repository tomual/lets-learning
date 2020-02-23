<?php $this->load->view('header') ?>

<div class="container">
	<div class="row">

		<div class="col">
			<h1 class="page-title py-5">
				Dashboard
			</h1>
		</div>
	</div>
	<div class="row">
		<div class="col">
			<div class="card">
				<div class="card-header">
					Recent Applications
				</div>
				<table class="table card-table">
					<tr>
						<th>Name</th>
						<th class="text-right">Applied</th>
					</tr>
					<tr>
						<td><a href="">Tom test</a></td>
						<td class="text-right">Jan 10, 2020</td>
					</tr>
					<tr>
						<td><a href="">Tom test</a></td>
						<td class="text-right">Jan 10, 2020</td>
					</tr>
					<tr>
						<td><a href="">Tom test</a></td>
						<td class="text-right">Jan 10, 2020</td>
					</tr>
				</table>
			</div>
		</div>
		<div class="col">
			<div class="card">
				<div class="card-header">
					Recent Postings
					<a href="<?php echo base_url('job/post') ?>" class="btn btn-primary btn-sm ml-auto"><i class="fe fe-plus"></i> Post New</a>
				</div>
				<table class="table card-table">
					<tr>
						<th>Post</th>
						<th>Status</th>
					</tr>
					<tr>
						<td>Junior Graphic Designer</td>
						<td>Open</td>
					</tr>
				</table>
			</div>
		</div>
	</div>
</div>
<?php $this->load->view('footer') ?>