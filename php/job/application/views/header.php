<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title><?php echo get_title() ? get_title() . ' | ' : '' ?>Jobr</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, minimal-ui">
    <meta http-equiv="cleartype" content="on">

    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600" rel="stylesheet">
    <link href="https://preview.tabler.io/assets/css/dashboard.css" rel="stylesheet">
    <link rel="stylesheet" href="//rawcdn.githack.com/Alex-D/Trumbowyg/v2.19.1/dist/ui/trumbowyg.min.css">
    <link href="<?php echo base_url('css/style.css') ?>" rel="stylesheet">
</head>
<body>
    <div class="bg-blue">
        <div class="container"> 
            <nav class="navbar navbar-expand-md navbar-dark">
                <a class="navbar-brand" href="<?php echo base_url() ?>">Jobr</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbar">
                    <ul class="navbar-nav mr-auto">
<!--                         <li class="nav-item active">
                            <a class="nav-link" href="<?php echo base_url() ?>">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="<?php echo base_url('page') ?>">Page</a>
                        </li> -->
                    </ul>
                    <div class="my-2 my-lg-0">
                        <ul class="navbar-nav mr-auto">
                            <?php if ($this->user): ?>
                                <li class="nav-item">
                                    <a class="nav-link" href="<?php echo base_url('settings/edit') ?>"><?php echo $this->user->username ?></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="<?php echo base_url('user/logout') ?>">Log Out</a>
                                </li>
                                <?php else: ?>
                                    <li class="nav-item">
                                        <a class="nav-link" href="<?php echo base_url('user/login') ?>">Log In</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="<?php echo base_url('user/signup') ?>">Sign Up</a>
                                    </li>
                                <?php endif ?>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
        <?php if ($this->user): ?>
            <div class="header collapse d-lg-flex p-0" id="headerMenuCollapse">
                <div class="container">
                    <div class="col-lg order-lg-first">
                        <ul class="nav nav-tabs border-0 flex-column flex-lg-row">
                            <li class="nav-item">
                                <a href="<?php echo base_url('dashboard') ?>" class="nav-link"><i class="fe fe-home"></i> Dashboard</a>
                            </li>
                            <li class="nav-item">
                                <a href="<?php echo base_url('applicant') ?>" class="nav-link"><i class="fe fe-user"></i> Applicants</a>
                            </li>
                            <li class="nav-item">
                                <a href="<?php echo base_url('job') ?>" class="nav-link"><i class="fe fe-file"></i> Jobs</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <?php endif ?>