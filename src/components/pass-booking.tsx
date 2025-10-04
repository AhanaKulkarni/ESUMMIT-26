import { useState } from "react";
import {
  Check,
  Info,
  Ticket,
  Users,
  ArrowRight,
  CreditCard,
  Mail,
  Phone,
  Building2,
} from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Checkbox } from "./ui/checkbox";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./ui/tabs";
import { Alert, AlertDescription } from "./ui/alert";
import { toast } from "sonner@2.0.3";
import { motion } from "motion/react";
import { GlowCard } from "./accentricity/glow-card";
import { ShimmerButton } from "./accentricity/shimmer-button";
import { GlassCard } from "./accentricity/glass-card";
import { PulseDot } from "./accentricity/pulse-dot";

export function PassBooking() {
  const [step, setStep] = useState(1);
  const [selectedPass, setSelectedPass] = useState<
    string | null
  >(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    year: "",
    rollNumber: "",
    meals: false,
    merchandise: false,
    workshop: false,
  });

  const passes = [
    {
      id: "day1",
      name: "Gold Pass",
      price: 499,
      originalPrice: 699,
      features: [
        "Access to all Day 1 events",
        "Keynote sessions",
        "Networking lunch",
        "Welcome kit",
        "Certificate of participation",
      ],
      badge: "Popular",
    },
    {
      id: "day2",
      name: "Silver Pass",
      price: 499,
      originalPrice: 699,
      features: [
        "Access to all Day 2 events",
        "Competition finals",
        "Panel discussions",
        "Networking dinner",
        "Certificate of participation",
      ],
    },
    {
      id: "full",
      name: "Platinum Pass",
      price: 799,
      originalPrice: 1199,
      features: [
        "Access to all events (both days)",
        "All keynote sessions",
        "Priority seating",
        "Exclusive networking sessions",
        "Welcome kit & merchandise",
        "Certificate of participation",
        "Access to recordings",
      ],
      badge: "Best Value",
      recommended: true,
    },
    {
      id: "group",
      name: "Group Pass (5+)",
      price: 599,
      originalPrice: 799,
      features: [
        "For teams of 5 or more",
        "All Full Summit Pass benefits",
        "25% discount per person",
        "Dedicated team coordinator",
        "Group photo with speakers",
        "Special group activities",
      ],
      badge: "Team Discount",
    },
  ];

  const addons = [
    {
      id: "meals",
      name: "All Meals (2 days)",
      price: 300,
      icon: "🍽️",
    },
    {
      id: "merchandise",
      name: "E-Summit Merchandise Kit",
      price: 500,
      icon: "🎽",
    },
    {
      id: "workshop",
      name: "Premium Workshop Access",
      price: 700,
      icon: "🎓",
    },
  ];

  const handlePassSelect = (passId: string) => {
    setSelectedPass(passId);
    setStep(2);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Please fill all required fields");
      return;
    }
    setStep(3);
  };

  const handlePayment = () => {
    // Mock payment
    toast.success(
      "Payment successful! Check your email for confirmation.",
    );
    setTimeout(() => {
      setStep(4);
    }, 1500);
  };

  const selectedPassData = passes.find(
    (p) => p.id === selectedPass,
  );
  const totalAddons =
    (formData.meals ? 300 : 0) +
    (formData.merchandise ? 500 : 0) +
    (formData.workshop ? 700 : 0);
  const totalPrice =
    (selectedPassData?.price || 0) + totalAddons;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Progress Steps */}
      <div className="mb-8 flex items-center justify-center gap-4">
        {[
          { num: 1, label: "Select Pass" },
          { num: 2, label: "Your Details" },
          { num: 3, label: "Payment" },
          { num: 4, label: "Confirmation" },
        ].map((item, idx) => (
          <div key={item.num} className="flex items-center">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full ${
                step >= item.num
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {step > item.num ? (
                <Check className="h-5 w-5" />
              ) : (
                item.num
              )}
            </div>
            <span className="ml-2 hidden text-sm sm:inline">
              {item.label}
            </span>
            {idx < 3 && (
              <div className="mx-2 h-px w-8 bg-border sm:w-16" />
            )}
          </div>
        ))}
      </div>

      {/* Step 1: Pass Selection */}
      {step === 1 && (
        <div>
          <div className="mb-8 text-center">
            <h1 className="mb-4">Choose Your Pass</h1>
            <p className="text-muted-foreground">
              Select the perfect pass for your E-Summit
              experience
            </p>
            <Alert className="mx-auto mt-4 max-w-2xl">
              <Info className="h-4 w-4" />
              <AlertDescription>
                Early bird offer ends Feb 1st! Save up to 40% on
                pass prices.
              </AlertDescription>
            </Alert>
          </div>

          <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {passes.map((pass, index) => (
              <motion.div
                key={pass.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                {pass.recommended ? (
                  <GlowCard>
                    <Card
                      className={`relative transition-all hover:shadow-lg border-primary h-full`}
                    >
                      {pass.badge && (
                        <div className="absolute -top-3 left-4 flex items-center gap-1">
                          <PulseDot size="sm" />
                          <Badge className="bg-primary">
                            {pass.badge}
                          </Badge>
                        </div>
                      )}
                      <CardHeader className="pb-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3>{pass.name}</h3>
                            <div className="mt-2 flex items-baseline gap-2">
                              <span className="text-3xl text-primary">
                                ₹{pass.price}
                              </span>
                              <span className="text-sm text-muted-foreground line-through">
                                ₹{pass.originalPrice}
                              </span>
                            </div>
                          </div>
                          <motion.div
                            whileHover={{
                              rotate: 360,
                              scale: 1.2,
                            }}
                            transition={{ duration: 0.5 }}
                          >
                            <Ticket className="h-8 w-8 text-primary" />
                          </motion.div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="mb-6 space-y-2">
                          {pass.features.map((feature, idx) => (
                            <motion.li
                              key={feature}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                delay: 0.3 + idx * 0.1,
                              }}
                              className="flex items-start gap-2 text-sm"
                            >
                              <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                              <span>{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                        <ShimmerButton
                          className="w-full"
                          onClick={() =>
                            handlePassSelect(pass.id)
                          }
                        >
                          Select Pass
                        </ShimmerButton>
                      </CardContent>
                    </Card>
                  </GlowCard>
                ) : (
                  <GlassCard className="h-full">
                    <Card className="relative border-0 bg-transparent h-full">
                      {pass.badge && (
                        <Badge className="absolute -top-3 left-4 bg-primary">
                          {pass.badge}
                        </Badge>
                      )}
                      <CardHeader className="pb-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3>{pass.name}</h3>
                            <div className="mt-2 flex items-baseline gap-2">
                              <span className="text-3xl text-primary">
                                ₹{pass.price}
                              </span>
                              <span className="text-sm text-muted-foreground line-through">
                                ₹{pass.originalPrice}
                              </span>
                            </div>
                          </div>
                          <Ticket className="h-8 w-8 text-primary" />
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="mb-6 space-y-2">
                          {pass.features.map((feature) => (
                            <li
                              key={feature}
                              className="flex items-start gap-2 text-sm"
                            >
                              <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button
                          className="w-full"
                          variant="outline"
                          onClick={() =>
                            handlePassSelect(pass.id)
                          }
                        >
                          Select Pass
                        </Button>
                      </CardContent>
                    </Card>
                  </GlassCard>
                )}
              </motion.div>
            ))}
          </div>

          {/* Comparison Table */}
          <Card className="overflow-hidden">
            <CardHeader>
              <h2>Compare Passes</h2>
            </CardHeader>
            <CardContent className="overflow-x-auto p-0">
              <table className="w-full text-sm">
                <thead className="border-b bg-muted/50">
                  <tr>
                    <th className="p-4 text-left">Feature</th>
                    {passes.slice(0, 4).map((pass) => (
                      <th
                        key={pass.id}
                        className="p-4 text-center"
                      >
                        {pass.name.split(" ")[0]}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    "Access to events",
                    "Keynote sessions",
                    "Networking opportunities",
                    "Certificate",
                    "Priority seating",
                    "VIP lounge",
                    "Meet speakers",
                  ].map((feature, idx) => (
                    <tr key={feature} className="border-b">
                      <td className="p-4">{feature}</td>
                      {passes
                        .slice(0, 4)
                        .map((pass, passIdx) => (
                          <td
                            key={pass.id}
                            className="p-4 text-center"
                          >
                            {(passIdx === 0 && idx < 4) ||
                            (passIdx === 1 && idx < 4) ||
                            (passIdx === 2 && idx < 5) ||
                            passIdx === 3 ? (
                              <Check className="mx-auto h-5 w-5 text-primary" />
                            ) : (
                              <span className="text-muted-foreground">
                                —
                              </span>
                            )}
                          </td>
                        ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Step 2: User Details */}
      {step === 2 && selectedPassData && (
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 text-center">
            <h1 className="mb-4">Your Details</h1>
            <p className="text-muted-foreground">
              Please provide your information to complete
              registration
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <h3>Registration Form</h3>
                </CardHeader>
                <CardContent>
                  <form
                    onSubmit={handleFormSubmit}
                    className="space-y-4"
                  >
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            name: e.target.value,
                          })
                        }
                        placeholder="Enter your full name"
                        required
                      />
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              email: e.target.value,
                            })
                          }
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              phone: e.target.value,
                            })
                          }
                          placeholder="+91 98765 43210"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="college">
                        College/University *
                      </Label>
                      <Input
                        id="college"
                        value={formData.college}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            college: e.target.value,
                          })
                        }
                        placeholder="Your institution name"
                        required
                      />
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <Label htmlFor="year">
                          Year of Study
                        </Label>
                        <Select
                          value={formData.year}
                          onValueChange={(value) =>
                            setFormData({
                              ...formData,
                              year: value,
                            })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select year" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">
                              1st Year
                            </SelectItem>
                            <SelectItem value="2">
                              2nd Year
                            </SelectItem>
                            <SelectItem value="3">
                              3rd Year
                            </SelectItem>
                            <SelectItem value="4">
                              4th Year
                            </SelectItem>
                            <SelectItem value="pg">
                              Post Graduate
                            </SelectItem>
                            <SelectItem value="other">
                              Other
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="rollNumber">
                          Roll Number
                        </Label>
                        <Input
                          id="rollNumber"
                          value={formData.rollNumber}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              rollNumber: e.target.value,
                            })
                          }
                          placeholder="Your roll number"
                        />
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <h4 className="mb-4">
                        Add-ons (Optional)
                      </h4>
                      <div className="space-y-3">
                        {addons.map((addon) => (
                          <div
                            key={addon.id}
                            className="flex items-center justify-between rounded-lg border p-3"
                          >
                            <div className="flex items-center gap-3">
                              <Checkbox
                                id={addon.id}
                                checked={
                                  formData[
                                    addon.id as keyof typeof formData
                                  ] as boolean
                                }
                                onCheckedChange={(checked) =>
                                  setFormData({
                                    ...formData,
                                    [addon.id]: checked,
                                  })
                                }
                              />
                              <Label
                                htmlFor={addon.id}
                                className="flex items-center gap-2 cursor-pointer"
                              >
                                <span>{addon.icon}</span>
                                {addon.name}
                              </Label>
                            </div>
                            <span className="text-sm">
                              +₹{addon.price}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2 pt-4">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setStep(1)}
                      >
                        Back
                      </Button>
                      <Button type="submit" className="flex-1">
                        Continue to Payment
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-20">
                <CardHeader>
                  <h3>Order Summary</h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between">
                      <span>{selectedPassData.name}</span>
                      <span>₹{selectedPassData.price}</span>
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">
                      You save ₹
                      {selectedPassData.originalPrice -
                        selectedPassData.price}
                    </div>
                  </div>

                  {totalAddons > 0 && (
                    <div className="space-y-2 border-t pt-4">
                      {formData.meals && (
                        <div className="flex justify-between text-sm">
                          <span>All Meals</span>
                          <span>₹300</span>
                        </div>
                      )}
                      {formData.merchandise && (
                        <div className="flex justify-between text-sm">
                          <span>Merchandise Kit</span>
                          <span>₹500</span>
                        </div>
                      )}
                      {formData.workshop && (
                        <div className="flex justify-between text-sm">
                          <span>Workshop Access</span>
                          <span>₹700</span>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between">
                      <span>Total</span>
                      <span className="text-2xl text-primary">
                        ₹{totalPrice}
                      </span>
                    </div>
                  </div>

                  <Alert>
                    <Info className="h-4 w-4" />
                    <AlertDescription className="text-xs">
                      Your pass will be sent to your email after
                      payment
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      )}

      {/* Step 3: Payment */}
      {step === 3 && selectedPassData && (
        <div className="mx-auto max-w-2xl">
          <div className="mb-8 text-center">
            <h1 className="mb-4">Payment</h1>
            <p className="text-muted-foreground">
              Complete your payment securely
            </p>
          </div>

          <Card>
            <CardHeader>
              <h3>Payment Details</h3>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="rounded-lg bg-muted p-4">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm">Order Total</span>
                  <span className="text-2xl text-primary">
                    ₹{totalPrice}
                  </span>
                </div>
                <div className="text-xs text-muted-foreground">
                  {selectedPassData.name} + Add-ons
                </div>
              </div>

              <Tabs defaultValue="upi" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="upi">UPI</TabsTrigger>
                  <TabsTrigger value="card">Card</TabsTrigger>
                  <TabsTrigger value="netbanking">
                    Net Banking
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="upi" className="space-y-4">
                  <div>
                    <Label htmlFor="upi">UPI ID</Label>
                    <Input
                      id="upi"
                      placeholder="yourname@upi"
                      className="font-mono"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Enter your UPI ID to receive payment request
                  </p>
                </TabsContent>

                <TabsContent value="card" className="space-y-4">
                  <div>
                    <Label htmlFor="cardNumber">
                      Card Number
                    </Label>
                    <Input
                      id="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      className="font-mono"
                    />
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <Label htmlFor="expiry">
                        Expiry Date
                      </Label>
                      <Input id="expiry" placeholder="MM/YY" />
                    </div>
                    <div>
                      <Label htmlFor="cvv">CVV</Label>
                      <Input
                        id="cvv"
                        placeholder="123"
                        type="password"
                        maxLength={3}
                      />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent
                  value="netbanking"
                  className="space-y-4"
                >
                  <div>
                    <Label htmlFor="bank">Select Bank</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose your bank" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sbi">
                          State Bank of India
                        </SelectItem>
                        <SelectItem value="hdfc">
                          HDFC Bank
                        </SelectItem>
                        <SelectItem value="icici">
                          ICICI Bank
                        </SelectItem>
                        <SelectItem value="axis">
                          Axis Bank
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </TabsContent>
              </Tabs>

              <Alert>
                <Info className="h-4 w-4" />
                <AlertDescription className="text-xs">
                  This is a demo payment. No real transaction
                  will occur.
                </AlertDescription>
              </Alert>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={() => setStep(2)}
                >
                  Back
                </Button>
                <Button
                  className="flex-1"
                  onClick={handlePayment}
                >
                  <CreditCard className="mr-2 h-4 w-4" />
                  Pay ₹{totalPrice}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Step 4: Confirmation */}
      {step === 4 && selectedPassData && (
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-8">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Check className="h-8 w-8 text-primary" />
            </div>
            <h1 className="mb-4">Registration Successful!</h1>
            <p className="text-muted-foreground">
              Your pass has been booked successfully
            </p>
          </div>

          <Card>
            <CardContent className="space-y-6 p-8">
              <div className="rounded-lg border-2 border-dashed p-6">
                <div className="mb-4 text-6xl">🎟️</div>
                <h3 className="mb-2">
                  {selectedPassData.name}
                </h3>
                <div className="mb-4 text-2xl text-primary">
                  ₹{totalPrice}
                </div>
                <div className="mx-auto h-24 w-24 rounded-lg bg-muted">
                  <div className="flex h-full items-center justify-center text-xs text-muted-foreground">
                    QR Code
                  </div>
                </div>
                <div className="mt-4 font-mono text-sm text-muted-foreground">
                  ESUMMIT-2025-
                  {Math.random()
                    .toString(36)
                    .substr(2, 9)
                    .toUpperCase()}
                </div>
              </div>

              <div className="space-y-2 text-left">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">
                    Confirmation sent to {formData.email}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">
                    SMS sent to {formData.phone}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Button className="w-full">
                  Download Digital Pass
                </Button>
                <Button variant="outline" className="w-full">
                  Add to Calendar
                </Button>
              </div>

              <Alert>
                <Info className="h-4 w-4" />
                <AlertDescription className="text-left text-xs">
                  Please carry a printed or digital copy of your
                  pass to the venue. You'll need to show it at
                  check-in.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}