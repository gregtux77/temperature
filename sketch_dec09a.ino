
#include <RCSwitch.h>
 
RCSwitch mySwitch = RCSwitch();
 
void setup() {
  Serial.begin(9600);
  // Emetteur connecté au pin #10 de l'Arduino  
  mySwitch.enableTransmit(10);
  mySwitch.setProtocol(1);
  mySwitch.setPulseLength(489);
  mySwitch.setRepeatTransmit(4);
  Serial.println("init ");
}
 
void loop() {
   temperature();
    delay(5000);
}




void temperature() {
  
  // Mesure la tension sur la broche A0 (sortie capteur) et A1 (référence du point zéro)
  int valeur_brute = analogRead(A0);
  int valeur_offset = analogRead(A1);
  
  // Transforme la mesure (nombre entier) en température via un produit en croix
  float temperature_celcius = (valeur_brute - valeur_offset) * (5.0 / 1023.0 * 100.0);
  
  // Envoi la mesure au PC pour affichage et attends 250ms
 // Serial.println(temperature_celcius);
 Serial.print("{\"devicetype\":\"18\",\"value\":");
  Serial.print(temperature_celcius);
  Serial.print("}\n");

  delay(5000);
  
}
