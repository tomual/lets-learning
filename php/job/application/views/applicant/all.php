<?php $this->load->view('header') ?>

<div class="container">

	<div class="row">
		<div class="col">
			<h1 class="page-title py-5">
				Applications
			</h1>
		</div>
		<div class="col-12">
			<div class="card">
				<div class="card-header">
					All Applications
				</div>
				<table class="table card-table">
					<tr>
						<th>Name</th>
						<th>Posting</th>
						<th class="text-right">Apply Date</th>
					</tr>
					<?php foreach ($applicants as $applicant): ?>
						<tr>
							<td><?php echo $applicant->name ?></td>
							<td><?php echo $applicant->title ?></td>
							<td><?php echo date('j M, Y', strtotime($applicant->created)) ?></td>
							<td class="text-right"><a href="" class="btn btn-sm btn-secondary"><i class="fe fe-view"></i> View</a></td>
						</tr>
					<?php endforeach ?>
				</table>
			</div>
		</div>
	</div>
</div>
<?php $this->load->view('footer') ?>