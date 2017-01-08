function OrderFormViewModel () {
    var self = this;

    self.amount = ko.observable(0);
    self.infoLabel = ko.observable("please enter a value");

    self.placeOrder = function () {
        var value = self.amount();

        if (value < 5) {
            self.infoLabel("less that 5 biscuits? surely not?");
            return;
        } else if (value > 500) {
            self.infoLabel("That is a respectable amount of Custard Creams");
        } else {
            self.infoLabel("Placing order...");
        }

        $.ajax("/api/orders/submitOrder", {
            data: { amount: self.amount },
            type: "post", 
            contentType: "text/json",
            success: function (result) {
                if (result.status === "success") {
                    self.infoLabel("Order placed successfully");
                } else {
                    self.infoLabel("Something went wrong:" + result.message);
                }
            }
        });
    }


}