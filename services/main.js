function changePrice(membership, months) {
    let htmlString = "";

    if(membership === "priority") {
        if(months === 1) {
            htmlString += `<p>250 грн. / міс.</p>`;

            document.getElementById("pricePriority").innerHTML = htmlString;
            document.getElementById("subscriptionDurationPriority1").style.backgroundColor = "#D3F51C";
            document.getElementById("subscriptionDurationPriority2").style.backgroundColor = "#3A3A3A";
        }
        else if(months === 6) {
            htmlString += `<p>1350 грн. / 6 міс.</p>`;

            document.getElementById("pricePriority").innerHTML = htmlString;
            document.getElementById("subscriptionDurationPriority1").style.backgroundColor = "#3A3A3A";
            document.getElementById("subscriptionDurationPriority2").style.backgroundColor = "#D3F51C";
        }
    }
    else if(membership === "maximum") {
        if(months === 1) {
            htmlString += `<p>600 грн. / міс.</p>`;

            document.getElementById("priceMaximum").innerHTML = htmlString;
            document.getElementById("subscriptionDurationMaximum1").style.backgroundColor = "#D3F51C";
            document.getElementById("subscriptionDurationMaximum2").style.backgroundColor = "#3A3A3A";
        }
        else if(months === 6) {
            htmlString += `<p>3240 грн. / 6 міс.</p>`;

            document.getElementById("priceMaximum").innerHTML = htmlString;
            document.getElementById("subscriptionDurationMaximum1").style.backgroundColor = "#3A3A3A";
            document.getElementById("subscriptionDurationMaximum2").style.backgroundColor = "#D3F51C";
        }
    }
}
