<?php
echo "gmarao";
echo '<div class="acc" id="acc"></div>
	//	<script src="js/temp_button.js"></script>
        <script>
        var acc = document.getElementsByClassName("accordion");
        var i;
        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function() {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight){
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                } 
            });
        }
alert("231");
        </script>';


echo "<style>
			body {
  				padding: 20px;
			}
			button {
  				margin-top: 20px;
				line-height: 60px;
				font-weight: bold;
				padding: 0 40px;
				border: none;
			}
			.callToAction {
				text-align: center;
				margin-top: 30px;
				margin-bottom: 30px;
			}
			.vector_button {
				transform: skew(10deg);
				margin-top: 20px;
				line-height: 60px;
				font-weight: bold;
				padding: 0 40px;
				border: none;
            }
            .accordion {
                background-color: #DCDCDC;
                color: #444;
                cursor: pointer;
                padding: 18px;
                width: 100%;
                border: none;
                text-align: left;
                outline: none;
                font-size: 15px;
                transition: 0.4s;
            }

            .headAccordion {
                background-color: #D3D3D3;
                border: 1px solid black;	
            }
            .active, .accordion:hover {
                background-color: #ccc;
            }
            .accordion:after {
                content: '\02795'; /* Unicode character for "plus" sign (+) */
                font-size: 13px;
                color: #777;
                float: right;
                margin-left: 5px;
            }

            .active:after {
                content: "\2796"; /* Unicode character for "minus" sign (-) */
            }
            
            .panel {
                padding: 0 18px;
                background-color: white;
                max-height: 0;
                overflow: hidden;
                transition: max-height 0.2s ease-out;
            }
		</style>";
?>
