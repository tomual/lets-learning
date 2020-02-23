<?php $this->load->view('header') ?>

<div class="container">
	<div class="row">
		<div class="col-lg-6 offset-lg-3 mt-5">
			<div class="card">
				<div class="card-header">
					<div class="card-title">
						Post a New Job
					</div>
				</div>
				<div class="card-body">
					<form method="post">
					    <div class="form-group">
					        <label for="title" class="form-label">Title</label>
					        <input type="text" name="title" id="title" value="<?php echo set_value('title') ?>" class="form-control <?php echo is_valid('title') ?>">
					        <?php echo form_error('title') ?>
					    </div>
					    <div class="form-group">
					        <label for="location" class="form-label">Location</label>
					        <input type="text" name="location" id="location" value="<?php echo set_value('location') ?>" class="form-control <?php echo is_valid('location') ?>">
					        <?php echo form_error('location') ?>
					    </div>
					    <div class="form-group">
					        <label for="description" class="form-label">Description</label>
					        <textarea rows="7" name="description" id="trumbowyg" class="form-control <?php echo is_valid('description') ?>"><?php echo set_value('description') ?></textarea>
					        <?php echo form_error('description') ?>
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