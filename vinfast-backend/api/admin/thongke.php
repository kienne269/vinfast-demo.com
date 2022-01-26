<?php
require('../../model/carbon/autoload.php');

use Carbon\Carbon;
use Carbon\CarbonInterval;

printf("Now : %s", carbon::now('Asia/Ho_Chi_Minh'));

printf("1 day: %s", CarbonInterval::day()->forHumans());
