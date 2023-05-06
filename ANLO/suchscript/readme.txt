PHP Suchscript by webdesign.weisshart.de


                            |         |          _)
             \ \  \   / _ \ __ \   _` |  _ \  __| |  _` | __ \
              \ \  \ /  __/ |   | (   |  __/\__ \ | (   | |   |
               \_/\_/ \___|_.__/ \__,_|\___|____/_|\__, |_|  _|  _)
                                                   |___/
                      _)           |                |             |
        \ \  \   / _ \ |  __|  __| __ \   _` |  __| __|        _` |  _ \
         \ \  \ /  __/ |\__ \\__ \ | | | (   | |    |         (   |  __/
          \_/\_/ \___|_|____/____/_| |_|\__,_|_|   \__|  _)  \__,_|\___|


                                                  http://webdesign.weisshart.de
###############################################################################
# Version 2.5
#
# Der Einsatz des Suchscripts ist kostenlos auf nicht kommerziellen Seiten.
# F�r den Einsatz auf einer kommerziellen Seite ist eine gewerbliche 
# Lizenz erforderlich:
# http://webdesign.weisshart.de/suchen-lizenz.php
#
# Wenn Sie die Links auf webdesign.weisshart.de entfernen wollen,
# k�nnen Sie hier eine Lizenz erwerben:
# http://webdesign.weisshart.de/suchen-lizenz.php
#
# F�r evl. auftretende Sch�den, die durch die Verwendung dieses Scripts entstehen,
# kann webdesign weisshart nicht haftbar gemacht werden.
# Die Benutzung erfolgt auf eigene Gefahr des Anwenders.
#
# Der unver�nderte Original-Quelltext darf auch zu nicht kommerziellen Zwecken
# weiter gegeben werden, sofern diese Datei mit dem Haftungsausschluss 
# mitgeliefert wird.
#
# Der Verkauf dieses Scripts, auch in modifizierter Form, ist ohne vorherige
# Absprache ausdr�cklich untersagt! 
# Bitte fragen Sie, bevor Sie versuchen, mit dem Skript Geld zu verdienen.
#
# die neueste Version? -> http://webdesign.weisshart.de/suchen.php
# Fragen oder Verbesserungsvorschl�ge:
# http://webdesign.weisshart.de/forum
############################################################################# 

Features:

- Das Script durchsucht das Verzeichnis, in dem es installiert ist,
  sowie beliebige Unterverzeichnisse dieses Installationsverzeichnisses.
- Eine Indexierung ist nicht erforderlich,
  neue oder ge�nderte Dateien werden sofort gefunden.
- Bei Eingabe mehrerer Suchw�rter werden diese automatisch mit UND verkn�pft.
- Alternativ OR Verkn�pfung
- Suche nach ganzen W�rtern 
- Logdatei und/oder E-Mail Benachrichtigung 
- alle Meldungen k�nnen personalisiert werden (z.B. f�r fremdsprachige Sites)
- Die Ausgabe kann per CSS an jedes Layout angepa�t werden.
- highlighting (Textmarker) der Treffer (funktioniert auch bei Google-Suche!)
 
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Der Server mu� PHP ab Version 4.3.0 unterst�tzen!!!

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Konfigurationsm�glichkeiten:

- E-Mail Benachrichtigung bei Suche
- Dateitypen, die von der Suche eingeschlossen werden sollen (z.B. html|php)
- zu durchsuchende Unterverzeichnisse explizit angeben,
  oder automatisch alle Unterverzeichnisse durchsuchen. 
- direktes Anspringen der Trefferseite, wenn die Suche nur 1 Treffer ergibt 
- Mindestl�nge f�r Suchstring
- einzelne Dateien von der Suche ausschlie�en
- meta-tags keywords, description und title wahlweise in die Suche einschlie�en
- html-tags (z.B. alt-tags) wahlweise in die Suche einschlie�en
- Start und Ende der Suche innerhalb der Dateien definieren
- unerw�nschte Strings von der Suche ausschlie�en
- Anzahl der Buchstaben, die vor und nach dem Treffer angezeigt werden (Kontext),
  wahlweise keine Kontextanzeige
- wahlweise Anzeige des meta-tags description anstelle des Kontext
- wahlweise vollst�ndigen Pfad zum Treffer anzeigen
- wahlweise Datum der letzten �nderung der Treffer anzeigen. 
- Das Datumsformat konfigurieren.
- wahlweise Suchtipps anzeigen
- wahlweise Anzahl der Treffer pro Dokument anzeigen
- max. Anzahl der angezeigten Trefferseiten
- Meldungstexte personalisieren
- weitere Einstellungen siehe Datei search_config.php
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Installation:

- zip entpacken

- alles in das zu durchsuchende (Haupt-)Verzeichnis uploaden
  dabei wird automatisch ein Unterverzeichnis wdw_suche erstellt
  nur die Datei suchen.php (eine lauff�hige Musterdatei) verbleibt im Hauptverzeichnis.

- Aufruf im Browser mit http://pfad_zur_datei/suchen.php

- bitte unbedingt vor der Anpassung der search-config.php mit dem vorkonfigurierten Suchformular testen!


und wenn's l�uft:

- search_config.php nach Wunsch konfigurieren.
  ACHTUNG: die search_config.php NICHT aufrufen und im Browser anschauen,
  sondern mit einem Texteditor (z.B. Notepad) bearbeiten.
  In dieser Datei gibt es auch alle Erl�uterungen zu Konfigurationsm�glichkeiten.

- Suchformular in eigene Seiten einbauen
  hierzu gibt es eine Schritt f�r Schritt Anleitung unter
  http://webdesign.weisshart.de/suchen-integrieren.php

- mit CSS das Aussehen der Suchergebnisseite formatieren

- Das Programm erstellt ein Logfile namens searchlog.txt im Unterverzeichnis wdw_suche.
  Die dort protokollierten Zugriffe k�nnen n�tzlich sein zur Optimierung der Site.

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Changelog: (nicht aufgef�hrt: Bugfixes und Vorbereitung auf neue oder kundenspezifische Funktionen)

2.1.0 24.02.12   Alle Dateien au�er der suchen.php in ein Unterverzeichnis (konfigurierbar, default: wdw_suche)

2.3.0 17.04.13   Datumsformat konfigurierbar machen. Ganz einfach: statt $dateform en das richtige Format
                 Erweiterte Formatierungsm�glichkeiten f�r die Ausgabe mittels CSS

2.4.0 27.05.13   PHP 5.4 Vorbereitung: utf-8 muss in config deklariert werden

2.4.2 19.06.13   Trefferseiten bei OR-Suche nur einmal auflisten

2.5.0 19.07.13   Die "�berschriften" in den Suchergebnissen konfigurieren. $list_hx = 3; erzeugt <h3>

2.5.1 12.08.13   "URL: " entfernt. Bugfixes

2.5.2 22.12.13   Bugfix case sensitivity bei Umlauten

2.5.3 08.10.13   Die Ordnung der �berschrift f�r die Suchtipps konfigurieren. $hx_suchtip = 2; erzeugt <h2>f�r die Suchtip�berschrift.

2.5.4 20.10.13   Vorbereitung f�r zuk�nftige Erweiterungen

2.5.5 16.11.13   Vorbereitung f�r alphabetische Sortierung

2.5.6 18.11.13   Bugfix Umlaute Gro�-/Kleinschreibung (mb_strtolower)

2.5.7 29.07.14   Ersten Suchtreffer anspringen (scrollen) - nur mit Lizenz auf Anforderung
                 Suchhinweise anzeigen, wenn kein Treffer
                 zahlreiche Bugfixes
				
2.5.10 07.10.14  Zur�cklink, Bugfixes

2.5.13 26.12.14  Bugfixes

2.5.14 15.01.15  Es k�nnen auch Ordner durchsucht werden, die auf der gleichen Hierarchieebene liegen, wie /wdw_suche

2.5.15 21.01.15  config: Die folgende Anweisung entkommentieren, wenn Entities auf UTF-8 kodierten Seiten verwendet werden: //$encoding = "utf";
                 Highlighting vermeiden, wenn nicht ein Trefferlink verfolgt wird, sondern z. B. aus dem Men� eine andere Seite aufgerufen wird

2.5.16 12.02.15  Die Funktionalit�t "Highlighting vermeiden" aus Version 2.5.15 vollkommen neu kodiert, um div. Unsauberkeiten zu korrigieren.

2.5.17 13.02.15  Bugfix Highlighting von Ausdr�cken (mehrere W�rter)

2.5.18 15.02.15  Bugfixes

2.5.19 15.02.15  Ausdr�cke mit oder finden, z. B. "kleiner oder gr��er"

2.5.20 19.02.15  Bugfixes

2.5.21 24.04.15  Bugfixes
                 
2.5.22 07.06.15  utf-8 Mailheader hinzugef�gt.

2.5.23 18.07.15  Bugfixes

2.5.24 25.01.16  Bugfixes

2.5.25 01.02.16  Bugfixes

2.5.26 09.04.16  Bugfixes

2.5.27 30.06.16  Suchtipps werden aufgeklappt angezeigt, wenn kein Treffer

2.5.28 03.08.17  Bugfix $jump = true; i.V.m. $pfad = false; war kaputt

2.5.29 11.10.17  Reloadsperre: IP anonymisiert (Datenschutz)

2.5.30 15.02.18  Bugfixes

2.5.31 19.02.18  Bugfix Highlighting Umlaute PHP7

2.5.32 12.11.18  searchlog.txt mit Jahreszahl

2.5.33 01.03.19  Bugfix Highlighting Ausdruck aus mehreren W�rtern zwischen Anf�hrungszeichen
