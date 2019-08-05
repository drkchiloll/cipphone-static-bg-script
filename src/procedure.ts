const sequences = [(
  `<CiscoIPPhoneExecute><ExecuteItem URL=`+
  `"Key:Settings"/><ExecuteItem URL="Key:KeyPad1"/>`+
  `<ExecuteItem URL="Key:KeyPad2"/></CiscoIPPhoneExecute>`
),(
  `<CiscoIPPhoneExecute><ExecuteItem URL="Key:KeyPad2"/>`+
  `<ExecuteItem URL="Key:Soft1"/></CiscoIPPhoneExecute>`
),(
  `<CiscoIPPhoneExecute>`+
  `<ExecuteItem URL="Key:Soft2"/>`+
  `</CiscoIPPhoneExecute>`
), (
  `<CiscoIPPhoneExecute><ExecuteItem URL=`+
  `"Key:Soft3"/><ExecuteItem URL="Key:Soft3"/>`+
  `</CiscoIPPhoneExecute>`
)]

export { sequences };