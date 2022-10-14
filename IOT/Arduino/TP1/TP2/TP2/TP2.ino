void setup() {
   pinMode(10, OUTPUT);
   pinMode(A1, INPUT);
}

void loop() {
   int val = analogRead(A1);  // lit la valeur actuelle du potentiomètre

   val = val / 4;
   analogWrite(10, val);
}
