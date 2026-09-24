METEOCLIMA PWA — PROTOTIPO 1

File:
- index.html
- manifest.json
- service-worker.js

Uso rapido:
1. Aprire index.html nel browser per vedere la dashboard.
2. Per installarla come vera PWA occorre servirla via HTTPS o localhost.
3. Questa versione usa mappe dimostrative.
4. La fase successiva sarà collegare mappe e dati reali del giorno.

Struttura già inclusa:
- Segnale dominante
- 3 mappe principali
- GFS vs GEM
- Affidabilità
- Scadenza chiave
- Possibile svolta
- Errore rispetto a ieri
- 4 righe finali
- Contesto globale
- Schede Mappe / Confronto ieri / Storico / ENSO e indici


PROTOTIPO 3 — MOTORE DIAGNOSTICO
- I testi principali non sono più sparsi nel layout: sono generati da un unico profilo dati giornaliero.
- Segnale dominante, confronto modelli, affidabilità, scadenza chiave, possibile svolta,
  errore rispetto a ieri e 4 righe finali vengono renderizzati automaticamente.
- Aggiunti collegamenti operativi GEFS e AO NOAA.
- Prossimo passaggio: integrare confronto GFS/GEM + ensemble in modo strutturato.


PROTOTIPO 4 — CONFRONTO MODELLI
- Aggiunto pannello strutturato GFS / GEM / Ensemble.
- Aggiunto consenso sintetico.
- Aggiunti accessi rapidi a GFS, GEM, GEFS e Ensemble GEM.
- La logica distingue ora scenario deterministico e sostegno probabilistico.
- Restano 2 passaggi: storico/confronto con ieri e rifinitura/installazione finale.


PROTOTIPO 5 — STORICO E CONFRONTO
- Aggiunto archivio locale fino a 30 report giornalieri.
- Aggiunto confronto automatico con il giorno precedente.
- Aggiunta sezione storico con segnale dominante, affidabilità, scadenza chiave, stato e da sorvegliare.
- Inserito un giorno demo iniziale per mostrare subito il funzionamento del confronto.
- Resta 1 solo passaggio: rifinitura finale e installazione PWA.
