Secondo le specifiche di progetto, dopo aver generato un grafico a torta a partire da un file
json contenente dati bivariati, dove il primo datacase viene utilizzato per la dimensione
di uno spicchio di torta ed il secondo per la tonalità di colore;
cliccando su un settore della torta vengono intercambiate le funzioni delle due variabili:
quindi il primo datacase viene usato per il colore ed il secondo per la dimensione.

Chiaramente nel file json dei dati la prima variabile è espressa con un valore intero,
la seconda, che indica un colore, è rappresentata da una stringa che rappresenta un valore
esadecimale preceduta da #.
Nel momento di inversione dei dati quindi il valore numerico viene trasformato in un valore
esadecimale e la stringa esadecimale viene convertita in un valore numerico mediante delle apposite
funzioni.

Alcune considerazioni sulla conversione dei valori:

Decimale-> Esadecimale: il valore espresso in esadecimale è costituito da tre componenti (RGB)
ma nel momento della conversione (da decimale a esadecimale) c'è un solo valore decimale da convertire, quindi la conversione
in esadecimale viene fatta sulla base della trasformazione di quella singola componente di colore.

Esadecimale->Decimale: Anche in questo caso la trasformazione, normalmente dovrebbe restituire un vettore di 3 interi,
uno per ogni componente di colore, per semplicità invece viene resituito in valore che indica la somma delle 3 componenti 
convertite in valori decimali.

Al fine di evitare problemi di conversione è consentito fare click su ogni settore una sola volta.
Dopo che sono stati trasformati tutti i settori della torta (o anche prima) è possibile ritornare
alla configurazione di partenza e quindi ricominciare.