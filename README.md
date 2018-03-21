# isIPv4

Small JS library that checks if the given string is an IPv4 Address

## Install

```
npm install isipv4
```

# Usage

```
import isipv4 from 'isipv4'

isipv4('172.16.254.1') // true
isipv4('172.316.254.1') // false
isipv4('.254.255.0') // false
isipv4('1.1.1.1a') // false
``` 

# License

[MIT](https://opensource.org/licenses/MIT)

# Contact

[José Cuevas](https://twitter.com/Jose_Crz)
