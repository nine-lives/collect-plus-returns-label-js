# Javascript Collect+ Returns Label Printer
 
## Getting started

Download:
 
1. [The Collect+ returns label script](https://raw.githubusercontent.com/nine-lives/collect-plus-return-labels-js/master/collect-plus-returns-label.min.js) 
1. [The JsBarcode combined script](https://github.com/lindell/JsBarcode/releases/download/1.6.1/JsBarcode.all.min.js)

Include the scripts:

```
    <script src="JsBarcode.all.min.js"></script>
    <script src="collect-plus-returns-label.min.js"></script>
```
Add a print label button:

```
   <button class="cp_returns_label"
            data-client-name="Client Ltd"
            data-tac="83K"
            data-sequence="7116"
            data-depot-number="51"
            data-depot-short="ABCT"
            data-service="72 HR"
            data-label-date="19/01/2016"
            data-returns-reference="10456-123-123"
            data-center-name="Returns Name"
            data-address-1="Returns Warehouse"
            data-address-2="Returns Close"
            data-address-3="Returns Town"
            data-address-4="Returns County"
            data-address-postcode="AB1 1BA">Print Collect+ Label
    </button>
```

Or a print label link:

```
   <a href="#" class="cp_returns_label"
            data-client-name="Client Ltd"
            data-tac="83K"
            data-sequence="7116"
            data-depot-number="51"
            data-depot-short="ABCT"
            data-service="72 HR"
            data-label-date="19/01/2016"
            data-returns-reference="10456-123-123"
            data-center-name="Returns Name"
            data-address-1="Returns Warehouse"
            data-address-2="Returns Close"
            data-address-3="Returns Town"
            data-address-4="Returns County"
            data-address-postcode="AB1 1BA">Print Collect+ Label
    </a>
```

Style the button / link however you want. That's it.

## Some other details

The library will bootstrap any element with the class ```cp_returns_label```. The data attributes do the following:

| Attribute              | Optional | Format                      | Description                                                                             |
|------------------------|----------|-----------------------------|-----------------------------------------------------------------------------------------|
| data-address-1         | No       | Max 50 characters in length | Returns centre address line 1                                                           |
| data-address-2         | Yes      | Max 50 characters in length | Returns centre address line 2                                                           |
| data-address-3         | Yes      | Max 50 characters in length | Returns centre address line 3                                                           |
| data-address-4         | Yes      | Max 50 characters in length | Returns centre address line 4                                                           |
| data-address-postcode  | No       | Max 14 characters in length | Returns centre postcode                                                                 |
| data-center-name       | No       | Max 50 characters in length | The returns centre name                                                                 |
| data-client-name       | No       | N/A                         | Your company name                                                                       |
| data-depot-number      | No       | 2 digits                    | The route depot number as supplied by Collect+                                          |
| data-depot-short       | No       | 4 characters                | The depot short name as supplied by Collect+                                            |
| data-label-date        | Yes      | Format: dd/mm/yyyy          | The date the label was generated. If not supplied then today's date is supplied         |
| data-returns-reference | Yes      | N/A                         | Optional field for you to supply any reference number such as the customer order number |
| data-sequence          | No       | 1 to 8 numeric digits       | The next available sequence number for the TAC                                          |
| data-service           | No       | Max 9 characters in length  | The service code as supplied by Collect+                                                |
| data-tac               | No       | 3 characters                | The tracking account code as supplied by Collect+                                       |


## And an example...

... [can be found here](http://9ls.com/collect-plus-return-labels-js/)



