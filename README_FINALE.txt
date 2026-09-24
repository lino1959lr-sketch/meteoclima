METEOCLIMA — VERSIONE PWA FINALE (BASE STABILE)

Questa è la prima versione completa e installabile della PWA Meteoclima.

INCLUDE:
- Segnale dominante
- 3 mappe operative
- Confronto GFS / GEM / Ensemble
- Affidabilità
- Scadenza chiave
- Possibile svolta
- Errore rispetto a ieri
- 4 righe finali
- Storico locale fino a 30 giorni
- Confronto automatico con ieri
- Fonti operative
- Icone PWA
- Manifest completo
- Service worker
- Pulsante Installa

IMPORTANTE:
La PWA è pronta come struttura e interfaccia.
Per l’installazione completa come app occorre aprirla da un indirizzo HTTPS oppure localhost.
I dati diagnostici sono strutturati, ma non ancora alimentati da una vera API automatica per tutti i modelli:
questa è la base stabile su cui collegare in futuro feed/API ufficiali e aggiornamento giornaliero automatico.

INSTALLAZIONE:
Android/Chrome: menu ⋮ > Installa app / Aggiungi a schermata Home.
iPhone/iPad/Safari: Condividi > Aggiungi a Home.
Mac/Chrome: menu browser > Installa Meteoclima.


FASE AUTOMAZIONE — PASSAGGIO 1/3
- Collegati GFS e GEM reali via Open-Meteo.
- La PWA legge automaticamente MSLP, T850, Z500 e vento a 300 hPa.
- Calcola un primo accordo quantitativo alla scadenza ~+120 h.
- Aggiorna automaticamente la scheda GFS vs GEM.


FASE AUTOMAZIONE — PASSAGGIO 2/3
- Collegati GEFS e GEM Ensemble via Open-Meteo Ensemble API.
- Calcolata dispersione automatica dei membri a ~+120 h.
- L'affidabilità principale viene aggiornata automaticamente.
- Restante: diagnosi completa automatica + storico giornaliero automatico.


FASE AUTOMAZIONE — PASSAGGIO 3/3 COMPLETATO
- Segnale dominante derivato automaticamente da pressione, Z500, T850 e vento a 300 hPa.
- Scadenza chiave calcolata dalla prima divergenza significativa tra GFS e GEM.
- Possibile svolta derivata da accordo deterministico + affidabilità ensemble.
- Storico giornaliero aggiornato automaticamente con il profilo derivato.
- La PWA è ora una base automatizzata end-to-end.
