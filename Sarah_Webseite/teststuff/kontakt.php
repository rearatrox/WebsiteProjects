<div class="container">
    <h1 class="mb50 mt50"><span>Nehmen Sie Kontakt zu uns auf</span></h1>
    <?php
	
	$empfaenger = 'info@deine-domain.de'; // deine-adresse@gmx.de kann es auch sein!
	$absender = 'info@deine-domain.de';
	
    if(isset($_POST['abschicken'])){
        if(empty($_POST['name'])) $err[] = '<li>- den Namen angeben</li>'; 
        if(empty($_POST['email'])) $err[] = '<li>- die Email-Adresse angeben</li>'; 
        if(empty($_POST['text'])) $err[] = '<li>- welchen Wunsch haben Sie? Bitte den Text eingeben</li>'; 
    	if($_POST['contact_antispam'] != '4' && $_POST['contact_antispam'] != 'vier') $err[] = '<li>- falscher Sicherheitscode</li>';

        if(!empty($err)) {
            echo '<div class="alert alert-danger">Bitte korrigieren Sie folgende Fehler:<br>
            <ul class="list-unstyled content-list text-danger">';
            foreach($err as $fehler){
                echo $fehler;
            }
            echo '</ul></div>';
        } else {

			$mail_header = "From: Dein-Shop <".$absender.">\r\n"; 
			$mail_header .= "Reply-To: Dein-Shop <".$absender.">\r\n";
			$mail_header .= "X-Sender-IP: ".$_SERVER['REMOTE_ADDR']."\r\n"; 
			$mail_header .= "MIME-Version: 1.0\r\n"; 
			$mail_header .= "Content-Type: text/html; charset=UTF-8;\r\n"; 

            $mailnachricht = '<html><body>';
            while(list($feld,$wert)=each($_POST)) {
                if($feld!="abschicken" && $feld!="contact_antispam") {
                    $mailnachricht.=ucfirst($feld).": <br>".preg_replace("/(content-type:|bcc:|cc:|to:|from:)/im", "",$wert)."<br><br>";
                }
            }
            $email = preg_replace("/[^a-z0-9 !?:;,.\/_\-=+@#$&\*\(\)]/im", "", $_POST['email']);
            $email = preg_replace("/(content-type:|bcc:|cc:|to:|from:)/im", "", $email);
            $mailnachricht.="\nDatum/Zeit: ".date("d.m.Y H:i:s");
            $mailnachricht.= '</body></html>';
            mail($empfaenger, "Kontaktformular domain.de", $mailnachricht,$mail_header); 
            echo '<div class="alert alert-success">Vielen Dank für Ihre eMail!<br><br>Wir werden schnellstmöglich diese bearbeiten.</div>';
            $submitted = true;
        }
    } 
    
    if($submitted != true){ ?>
        <form role="form" class="well" method="post">
            <div class="form-group">
                <label>Name / Vorname*</label>
                <input class="form-control" type="text" name="name" value="<?php echo $_POST['name']; ?>">
            </div>
            <div class="form-group">
                <label>Email*</label>
                <input class="form-control" type="text" name="email" value="<?php echo $_POST['email']; ?>">
            </div>
            <div class="form-group">
                <label>Telefon</label>
                <input class="form-control" type="text" name="telefon" value="<?php echo $_POST['telefon']; ?>">
            </div>
            <div class="form-group">
                <label>Betreff</label>
                <input class="form-control" type="text" name="betreff" value="<?php echo $_POST['betreff']; ?>">
            </div>
            <div class="form-group">
                <label>Ihre Mitteilung*</label>
                <textarea class="form-control" rows="5" name="text"><?php echo $_POST['text']; ?></textarea>
            </div>
            <div class="form-group">
            <label>Spamschutz*: wie viele Beine hat ein Stuhl?</label>
            	<input class="form-control" type="text" value="<?php echo $_POST['contact_antispam']; ?>" name="contact_antispam">
            </div>

            <button type="submit" name="abschicken" class="btn btn-success btn-block"><i class="fa fa-envelope"></i> Nachricht absenden</button>
        </form>
        <br><br>
        <p style="font-size:11px;"><a href="http://www.easy-bytes.de/scripte/kontaktformular-script.html" target="_blank" title="Kontaktformular php Script">Kontaktformular php Script</a> von EASY-BYTES</p>
<?php	} ?>
</div>