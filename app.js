var countries = new Vue({
                el: '#countries',
                data: {
                    country: "" ,
                    dail_code : "+"+"232",
                    phonenumber: "",
                    full_phonenumber:"",
                    country_code:"SL",
                },
                methods: {

                    country_code_selector(event) {
                        country_code = event.target.value
                        this.country_code = country_code
                        if (country_code == "AF"){
                               this.dail_code ="+"+"93"
                        }else if (country_code == "AX"){
                               this.dail_code = "+"+"358"
                        }else if (country_code == "AL"){
                              this.dail_code = "+"+"355"
                        } else if (country_code == "DZ"){
                            this.dail_code = "+"+"213"
                        }else if (country_code == "AD"){
                            this.dail_code = "+"+"376"
                        }else if (country_code == "AQ"){
                            this.dail_code = "+"+"672"
                        }else if (country_code == "AS"){
                            this.dail_code = "+"+"1"
                        }else if (country_code == "AO" ){
                              this.dail_code = "+"+"244"
                        }else if (country_code == "AI" ){
                                            this.dail_code = "+"+"1264"
                        }else if (country_code == "AG" ){
                                            this.dail_code = "+"+"1268"
                        }else if (country_code == "AR" ){
                                            this.dail_code = "+"+"54"
                        }else if (country_code == "AM" ){
                                            this.dail_code = "+"+"374"
                        }else if (country_code == "AW" ){
                                            this.dail_code = "+"+"297"
                        }else if (country_code == "AU" ){
                                            this.dail_code = "+"+"61"
                        }else if (country_code == "AT" ){
                                            this.dail_code = "+"+"43"
                        }else if (country_code == "AZ" ){
                                            this.dail_code = "+"+"994"
                        }else if (country_code == "BS" ){
                                            this.dail_code = "+"+"1242"
                        }else if (country_code == "BH" ){
                                            this.dail_code = "+"+"973"
                        }else if (country_code == "BD" ){
                                            this.dail_code = "+"+"880"
                        }else if (country_code == "BB" ){
                                            this.dail_code = "+"+"1246"
                        }else if (country_code == "BY" ){
                                            this.dail_code = "+"+"375"
                        }else if (country_code == "BE" ){
                                            this.dail_code = "+"+"32"
                        }else if (country_code == "BZ" ){
                                            this.dail_code = "+"+"501"
                        }else if (country_code == "BJ" ){
                                            this.dail_code = "+"+"229"
                        }else if (country_code == "BM" ){
                                            this.dail_code = "+"+"1441"
                        }else if (country_code == "BT" ){
                                            this.dail_code = "+"+"975"
                        }else if (country_code == "BO" ){
                                            this.dail_code = "+"+"591"
                        }else if (country_code == "BA" ){
                                            this.dail_code = "+"+"387"
                        }else if (country_code == "BW" ){
                                            this.dail_code = "+"+"267"
                        }else if (country_code == "BR" ){
                                            this.dail_code = "+"+"55"
                        }else if (country_code == "BN" ){
                                            this.dail_code = "+"+"673"
                        }else if (country_code == "BG" ){
                                            this.dail_code = "+"+"359"
                        }else if (country_code == "BF" ){
                                            this.dail_code = "+"+"226"
                        }else if (country_code == "BI" ){
                                            this.dail_code = "+"+"257"
                        }else if (country_code == "KH" ){
                                            this.dail_code = "+"+"855"
                        }else if (country_code == "CM" ){
                                            this.dail_code = "+"+"237"
                        }else if (country_code == "CA" ){
                                            this.dail_code = "+"+"1"
                        }else if (country_code == "CV" ){
                                            this.dail_code = "+"+"238"
                        }else if (country_code == "KY" ){
                                            this.dail_code = "+"+"1345"
                        }else if (country_code == "CF" ){
                                            this.dail_code = "+"+"236"
                        }else if (country_code == "CL" ){
                                            this.dail_code = "+"+"56"
                        }else if (country_code == "CN" ){
                                            this.dail_code = "+"+"86"
                        }else if (country_code == "CO" ){
                                            this.dail_code = "+"+"57"
                        }else if (country_code == "KM" ){
                                            this.dail_code = "+"+"269"
                        }else if (country_code == "CG" ){
                                            this.dail_code = "+"+"242"
                        }else if (country_code == "CK" ){
                                            this.dail_code = "+"+"682"
                        }else if (country_code == "CR" ){
                                            this.dail_code = "+"+"506"
                        }else if (country_code == "HR" ){
                                            this.dail_code = "+"+"385"
                        }else if (country_code == "CU" ){
                                            this.dail_code = "+"+"53"
                        }else if (country_code == "CY" ){
                                            this.dail_code = "+"+"90392"
                        }else if (country_code == "CY" ){
                                            this.dail_code = "+"+"357"
                        }else if (country_code == "CZ" ){
                                            this.dail_code = "+"+"42"
                        }else if (country_code == "DK" ){
                                            this.dail_code = "+"+"45"
                        }else if (country_code == "DJ" ){
                                            this.dail_code = "+"+"253"
                        }else if (country_code == "DM" ){
                                            this.dail_code = "+"+"1809"
                        }else if (country_code == "DO" ){
                                            this.dail_code = "+"+"1809"
                        }else if (country_code == "EC" ){
                                            this.dail_code = "+"+"593"
                        }else if (country_code == "EG" ){
                                            this.dail_code = "+"+"20"
                        }else if (country_code == "SV" ){
                                            this.dail_code = "+"+"503"
                        }else if (country_code == "GQ" ){
                                            this.dail_code = "+"+"240"
                        }else if (country_code == "ER" ){
                                            this.dail_code = "+"+"291"
                        }else if (country_code == "EE" ){
                                            this.dail_code = "+"+"372"
                        }else if (country_code == "ET" ){
                                            this.dail_code = "+"+"251"
                        }else if (country_code == "FK" ){
                                            this.dail_code = "+"+"500"
                        }else if (country_code == "FO" ){
                                            this.dail_code = "+"+"298"
                        }else if (country_code == "FJ" ){
                                            this.dail_code = "+"+"679"
                        }else if (country_code == "FI" ){
                                            this.dail_code = "+"+"358"
                        }else if (country_code == "FR" ){
                                            this.dail_code = "+"+"33"
                        }else if (country_code == "GF" ){
                                            this.dail_code = "+"+"594"
                        }else if (country_code == "PF" ){
                                            this.dail_code = "+"+"689"
                        }else if (country_code == "GA" ){
                                            this.dail_code = "+"+"241"
                        }else if (country_code == "GM" ){
                                            this.dail_code = "+"+"220"
                        }else if (country_code == "GE" ){
                                            this.dail_code = "+"+"7880"
                        }else if (country_code == "DE" ){
                                            this.dail_code = "+"+"49"
                        }else if (country_code == "GH" ){
                                            this.dail_code = "+"+"233"
                        }else if (country_code == "GI" ){
                                            this.dail_code = "+"+"350"
                        }else if (country_code == "GR" ){
                                            this.dail_code = "+"+"30"
                        }else if (country_code == "GL" ){
                                            this.dail_code = "+"+"299"
                        }else if (country_code == "GD" ){
                                            this.dail_code = "+"+"1473"
                        }else if (country_code == "GP" ){
                                            this.dail_code = "+"+"590"
                        }else if (country_code == "GU" ){
                                            this.dail_code = "+"+"671"
                        }else if (country_code == "GT" ){
                                            this.dail_code = "+"+"502"
                        }else if (country_code == "GN" ){
                                            this.dail_code = "+"+"224"
                        }else if (country_code == "GW" ){
                                            this.dail_code = "+"+"245"
                        }else if (country_code == "GY" ){
                                            this.dail_code = "+"+"592"
                        }else if (country_code == "HT" ){
                                            this.dail_code = "+"+"509"
                        }else if (country_code == "HN" ){
                                            this.dail_code = "+"+"504"
                        }else if (country_code == "HK" ){
                                            this.dail_code = "+"+"852"
                        }else if (country_code == "HU" ){
                                            this.dail_code = "+"+"36"
                        }else if (country_code == "IS" ){
                                            this.dail_code = "+"+"354"
                        }else if (country_code == "IN" ){
                                            this.dail_code = "+"+"91"
                        }else if (country_code == "ID" ){
                                            this.dail_code = "+"+"62"
                        }else if (country_code == "IR" ){
                                            this.dail_code = "+"+"98"
                        }else if (country_code == "IQ" ){
                                            this.dail_code = "+"+"964"
                        }else if (country_code == "IE" ){
                                            this.dail_code = "+"+"353"
                        }else if (country_code == "IL" ){
                                            this.dail_code = "+"+"972"
                        }else if (country_code == "IT" ){
                                            this.dail_code = "+"+"39"
                        }else if (country_code == "JM" ){
                                            this.dail_code = "+"+"1876"
                        }else if (country_code == "JP" ){
                                            this.dail_code = "+"+"81"
                        }else if (country_code == "JO" ){
                                            this.dail_code = "+"+"962"
                        }else if (country_code == "KZ" ){
                                            this.dail_code = "+"+"7"
                        }else if (country_code == "KE" ){
                                            this.dail_code = "+"+"254"
                        }else if (country_code == "KI" ){
                                            this.dail_code = "+"+"686"
                        }else if (country_code == "KP" ){
                                            this.dail_code = "+"+"850"
                        }else if (country_code == "KR" ){
                                            this.dail_code = "+"+"82"
                        }else if (country_code == "KW" ){
                                            this.dail_code = "+"+"965"
                        }else if (country_code == "KG" ){
                                            this.dail_code = "+"+"996"
                        }else if (country_code == "LA" ){
                                            this.dail_code = "+"+"856"
                        }else if (country_code == "LV" ){
                                            this.dail_code = "+"+"371"
                        }else if (country_code == "LB" ){
                                            this.dail_code = "+"+"961"
                        }else if (country_code == "LS" ){
                                            this.dail_code = "+"+"266"
                        }else if (country_code == "LR" ){
                                            this.dail_code = "+"+"231"
                        }else if (country_code == "LY" ){
                                            this.dail_code = "+"+"218"
                        }else if (country_code == "LI" ){
                                            this.dail_code = "+"+"417"
                        }else if (country_code == "LT" ){
                                            this.dail_code = "+"+"370"
                        }else if (country_code == "LU" ){
                                            this.dail_code = "+"+"352"
                        }else if (country_code == "MO" ){
                                            this.dail_code = "+"+"853"
                        }else if (country_code == "MK" ){
                                            this.dail_code = "+"+"389"
                        }else if (country_code == "MG" ){
                                            this.dail_code = "+"+"261"
                        }else if (country_code == "MW" ){
                                            this.dail_code = "+"+"265"
                        }else if (country_code == "MY" ){
                                            this.dail_code = "+"+"60"
                        }else if (country_code == "MV" ){
                                            this.dail_code = "+"+"960"
                        }else if (country_code == "ML" ){
                                            this.dail_code = "+"+"223"
                        }else if (country_code == "MT" ){
                                            this.dail_code = "+"+"356"
                        }else if (country_code == "MH" ){
                                            this.dail_code = "+"+"692"
                        }else if (country_code == "MQ" ){
                                            this.dail_code = "+"+"596"
                        }else if (country_code == "MR" ){
                                            this.dail_code = "+"+"222"
                        }else if (country_code == "YT" ){
                                            this.dail_code = "+"+"269"
                        }else if (country_code == "MX" ){
                                            this.dail_code = "+"+"52"
                        }else if (country_code == "FM" ){
                                            this.dail_code = "+"+"691"
                        }else if (country_code == "MD" ){
                                            this.dail_code = "+"+"373"
                        }else if (country_code == "MC" ){
                                            this.dail_code = "+"+"377"
                        }else if (country_code == "MN" ){
                                            this.dail_code = "+"+"976"
                        }else if (country_code == "MS" ){
                                            this.dail_code = "+"+"1664"
                        }else if (country_code == "MA" ){
                                            this.dail_code = "+"+"212"
                        }else if (country_code == "MZ" ){
                                            this.dail_code = "+"+"258"
                        }else if (country_code == "MN" ){
                                            this.dail_code = "+"+"95"
                        }else if (country_code == "NA" ){
                                            this.dail_code = "+"+"264"
                        }else if (country_code == "NR" ){
                                            this.dail_code = "+"+"674"
                        }else if (country_code == "NP" ){
                                            this.dail_code = "+"+"977"
                        }else if (country_code == "NL" ){
                                            this.dail_code = "+"+"31"
                        }else if (country_code == "NC" ){
                                            this.dail_code = "+"+"687"
                        }else if (country_code == "NZ" ){
                                            this.dail_code = "+"+"64"
                        }else if (country_code == "NI" ){
                                            this.dail_code = "+"+"505"
                        }else if (country_code == "NE" ){
                                            this.dail_code = "+"+"227"
                        }else if (country_code == "NG" ){
                                            this.dail_code = "+"+"234"
                        }else if (country_code == "NU" ){
                                            this.dail_code = "+"+"683"
                        }else if (country_code == "NF" ){
                                            this.dail_code = "+"+"672"
                        }else if (country_code == "NP" ){
                                            this.dail_code = "+"+"670"
                        }else if (country_code == "NO" ){
                                            this.dail_code = "+"+"47"
                        }else if (country_code == "OM" ){
                                            this.dail_code = "+"+"968"
                        }else if (country_code == "PW" ){
                                            this.dail_code = "+"+"680"
                        }else if (country_code == "PA" ){
                                            this.dail_code = "+"+"507"
                        }else if (country_code == "PG" ){
                                            this.dail_code = "+"+"675"
                        }else if (country_code == "PY" ){
                                            this.dail_code = "+"+"595"
                        }else if (country_code == "PE" ){
                                            this.dail_code = "+"+"51"
                        }else if (country_code == "PH" ){
                                            this.dail_code = "+"+"63"
                        }else if (country_code == "PL" ){
                                            this.dail_code = "+"+"48"
                        }else if (country_code == "PT" ){
                                            this.dail_code = "+"+"351"
                        }else if (country_code == "PR" ){
                                            this.dail_code = "+"+"1787"
                        }else if (country_code == "QA" ){
                                            this.dail_code = "+"+"974"
                        }else if (country_code == "RE" ){
                                            this.dail_code = "+"+"262"
                        }else if (country_code == "RO" ){
                                            this.dail_code = "+"+"40"
                        }else if (country_code == "RU" ){
                                            this.dail_code = "+"+"7"
                        }else if (country_code == "RW" ){
                                            this.dail_code = "+"+"250"
                        }else if (country_code == "SM" ){
                                            this.dail_code = "+"+"378"
                        }else if (country_code == "ST" ){
                                            this.dail_code = "+"+"239"
                        }else if (country_code == "SA" ){
                                            this.dail_code = "+"+"966"
                        }else if (country_code == "SN" ){
                                            this.dail_code = "+"+"221"
                        }else if (country_code == "CS" ){
                                            this.dail_code = "+"+"381"
                        }else if (country_code == "SC" ){
                                            this.dail_code = "+"+"248"
                        }else if (country_code == "SL" ){
                                            this.dail_code = "+"+"232"
                        }else if (country_code == "SG" ){
                                            this.dail_code = "+"+"65"
                        }else if (country_code == "SK" ){
                                            this.dail_code = "+"+"421"
                        }else if (country_code == "SI" ){
                                            this.dail_code = "+"+"386"
                        }else if (country_code == "SB" ){
                                            this.dail_code = "+"+"677"
                        }else if (country_code == "SO" ){
                                            this.dail_code = "+"+"252"
                        }else if (country_code == "ZA" ){
                                            this.dail_code = "+"+"27"
                        }else if (country_code == "ES" ){
                                            this.dail_code = "+"+"34"
                        }else if (country_code == "LK" ){
                                            this.dail_code = "+"+"94"
                        }else if (country_code == "SH" ){
                                            this.dail_code = "+"+"290"
                        }else if (country_code == "KN" ){
                                            this.dail_code = "+"+"1869"
                        }else if (country_code == "SC" ){
                                            this.dail_code = "+"+"1758"
                        }else if (country_code == "SD" ){
                                            this.dail_code = "+"+"249"
                        }else if (country_code == "SR" ){
                                            this.dail_code = "+"+"597"
                        }else if (country_code == "SZ" ){
                                            this.dail_code = "+"+"268"
                        }else if (country_code == "SE" ){
                                            this.dail_code = "+"+"46"
                        }else if (country_code == "CH" ){
                                            this.dail_code = "+"+"41"
                        }else if (country_code == "SI" ){
                                            this.dail_code = "+"+"963"
                        }else if (country_code == "TW" ){
                                            this.dail_code = "+"+"886"
                        }else if (country_code == "TJ" ){
                                            this.dail_code = "+"+"7"
                        }else if (country_code == "TH" ){
                                            this.dail_code = "+"+"66"
                        }else if (country_code == "TG" ){
                                            this.dail_code = "+"+"228"
                        }else if (country_code == "TO" ){
                                            this.dail_code = "+"+"676"
                        }else if (country_code == "TT" ){
                                            this.dail_code = "+"+"1868"
                        }else if (country_code == "TN" ){
                                            this.dail_code = "+"+"216"
                        }else if (country_code == "TR" ){
                                            this.dail_code = "+"+"90"
                        }else if (country_code == "TM" ){
                                            this.dail_code = "+"+"7"
                        }else if (country_code == "TM" ){
                                            this.dail_code = "+"+"993"
                        }else if (country_code == "TC" ){
                                            this.dail_code = "+"+"1649"
                        }else if (country_code == "TV" ){
                                            this.dail_code = "+"+"688"
                        }else if (country_code == "UG" ){
                                            this.dail_code = "+"+"256"
                        }else if (country_code == "GB" ){
                                            this.dail_code = "+"+"44"
                        }else if (country_code == "UA" ){
                                            this.dail_code = "+"+"380"
                        }else if (country_code == "AE" ){
                                            this.dail_code = "+"+"971"
                        }else if (country_code == "UY" ){
                                            this.dail_code = "+"+"598"
                        }else if (country_code == "US" ){
                                            this.dail_code = "+"+"1"
                        }else if (country_code == "UZ" ){
                                            this.dail_code = "+"+"7"
                        }else if (country_code == "VU" ){
                                            this.dail_code = "+"+"678"
                        }else if (country_code == "VA" ){
                                            this.dail_code = "+"+"379"
                        }else if (country_code == "VE" ){
                                            this.dail_code = "+"+"58"
                        }else if (country_code == "VN" ){
                                            this.dail_code = "+"+"84"
                        }else if (country_code == "VG" ){
                                            this.dail_code = "+"+"84"
                        }else if (country_code == "VI" ){
                                            this.dail_code = "+"+"84"
                        }else if (country_code == "WF" ){
                                            this.dail_code = "+"+"681"
                        }else if (country_code == "YE" ){
                                            this.dail_code = "+"+"969"
                        }else if (country_code == "YE" ){
                                            this.dail_code = "+"+"967"
                        }else if (country_code == "ZM" ){
                                            this.dail_code = "+"+"260"
                        }else if (country_code == "ZW" ){
                                            this.dail_code = "+"+"263"                   
                       }else{
                                            this.dail_code = "+"+"232"

                      }      
                },
                phone_number_selector(){
                //TODO - validate phone number 
                      this.full_phonenumber = this.dail_code+this.phonenumber
                      console.log(this.full_phonenumber) 

            }
            }



    })