void setup() {  
  Serial2.begin(57600);
  SerialUSB.begin(9600);
  pinMode(LORA_RESET, OUTPUT);
  digitalWrite(LORA_RESET, LOW);
  delay(500);
  digitalWrite(LORA_RESET, HIGH);
}  
  
void loop() {
  while(Serial2.available()>0){
    uint8_t c = Serial2.read();
    SerialUSB.write(c);
  }   
  while(SerialUSB.available()){
    uint8_t d = SerialUSB.read();
    Serial2.write(d);   
  }
}
