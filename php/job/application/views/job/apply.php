<?php $this->load->view('header-naked') ?>

<div class="container">
	<div class="row">
		<div class="col-lg-6 offset-lg-3 mt-5">
			<div class="card p-5">
				<div class="card-body">
					<h1><?php echo $job->title ?></h1>
					<h5 class="py-5">Application form</h5>
					<form method="post" enctype="multipart/form-data">
						<div class="form-group">
							<label for="name" class="form-label">Name</label>
							<input type="text" name="name" id="name" value="<?php echo set_value('name') ?>" class="form-control <?php echo is_valid('name') ?>">
							<?php echo form_error('name') ?>
						</div>
						<div class="form-group">
							<label for="email" class="form-label">Email</label>
							<input type="text" name="email" id="email" value="<?php echo set_value('email') ?>" class="form-control <?php echo is_valid('email') ?>">
							<?php echo form_error('email') ?>
						</div>
						<div class="form-group">
							<label for="phone" class="form-label">Phone</label>
							<input type="text" name="phone" id="phone" value="<?php echo set_value('phone') ?>" class="form-control <?php echo is_valid('phone') ?>">
							<?php echo form_error('phone') ?>
						</div>
						<div class="form-group">
							<label for="resume" class="form-label">Resume</label>
							<div class="custom-file form-control border-0 <?php echo is_valid('resume') ?>">
								<input type="file" class="custom-file-input <?php echo is_valid('resume') ?>" name="resume">
								<label class="custom-file-label">Choose file</label>
							</div>
							<?php echo form_error('resume') ?>
						</div>
						<div class="form-group">
							<label for="cover" class="form-label">Cover Letter</label>
							<textarea rows="7" name="cover" class="form-control <?php echo is_valid('cover') ?>"><?php echo set_value('cover') ?></textarea>
							<?php echo form_error('cover') ?>
						</div>
						<div class="form-group">
							<input type="submit" value="Post" class="btn btn-primary">
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>
<?php $this->load->view('footer') ?>