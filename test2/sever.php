<?php

$arrUserMails = ['mike@gmail.com', 'bob@yandex.ru', 'lala@mail.ru', "key@mail.ru"];

	if(isset($_POST['contactEmail'])){

		if(in_array($_POST['contactEmail'], $arrUserMails)){
			$data['answer'] = False;
		}else{
			$data['answer'] = True;
		}

		echo json_encode($data);
	}
