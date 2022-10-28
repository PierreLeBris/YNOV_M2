void setup() {
 Serial1.begin(115200);
 SerialUSB.begin(57600);
 delay(2000);
 SerialUSB.print("Start");

 pinMode(BT_RESET, OUTPUT);
 digitalWrite(BT_RESET, LOW);
 delay(500);
 digitalWrite(BT_RESET, HIGH);

}

void loop() {
  while(Serial1.available()>0){
    uint8_t c = Serial1.read();
    SerialUSB.write(c);
  }
  while(SerialUSB.available()){
    uint8_t d = SerialUSB.read();
    Serial1.write(d);
  }

}
