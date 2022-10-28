#include <Arduino.h>
#include "RN487x_BLE.h"

#define debugSerial SerialUSB
#define bleSerial Serial1

// the setup function runs once when you press reset or power the board
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

// the loop function runs over and over again forever
void loop() {

  //10mV per C, 0C is 500mV
  /*float mVolts = (float)analogRead(TEMP_SENSOR) * 3300.0 / 1023.0;
    float temp = (mVolts - 500.0) / 10.0;

    debugSerial.print(temp);
    debugSerial.println(" C");*/

  debugSerial.write("TEST");
  bleSerial.write("test");
  bleSerial.println(bleSerial.read());

  delay(1000);

  /*digitalWrite(LED_RED, HIGH);
    delay(1000);
    digitalWrite(LED_RED, LOW);
    delay(1000);*/
}
