#include <Arduino.h>
#include "RN487x_BLE.h"

#define debugSerial SerialUSB
#define bleSerial Serial1

void setup() {
  pinMode(LED_RED, OUTPUT);
  pinMode(BT_RESET, LOW);
  delay(500);
  pinMode(BT_RESET, HIGH);
  //begin usb serial
  debugSerial.begin(57600);

  //define temperature pin as input
  pinMode(TEMP_SENSOR, INPUT);

  pinMode(BLUETOOTH_WAKE, INPUT);

  bleSerial.begin(115200);     
}


void loop() { 
  while (bleSerial.available()>0)
  {
    uint8_t c = bleSerial.read();
    debugSerial.write(c);
  }
  while (debugSerial.available())
  {
    uint8_t d = debugSerial.read();
    bleSerial.write(d);
  } // put your main code here, to run repeatedly:

}
