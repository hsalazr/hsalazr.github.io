 function FindProxyForURL(url, host) {
  if (shExpMatch(host, "*.cl"))
  {
   return "DIRECT";
  }
  if (isInNet(host, "10.252.3.0", "255.255.128.0"))
  {
   return "DIRECT";
  }
 	return "SOCKS 10.252.158.75:3128; DIRECT";
 }
