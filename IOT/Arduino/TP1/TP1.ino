void setup() {
// put your setup code here, to run once:
Serial.begin(9600);
}

void loop() {
// put your main code here, to run repeatedly:
for (int var = 0 ; var < 101 ; var++) {
  if (var == 100){
   Serial.println("Programme Terminé");
}
  Serial.println(var);
}

}
