"use client"

import { Input, Label, Select } from "@/components/ui"
import React, { useEffect, useState } from "react"

interface FormData {
  initialPrice: string
  billingFrequency: number
  billingPeriod: "Months" | "Weeks" | "Days"
  paymentAmount: string
  trialPeriod: number
  trialUnit: "None" | "Days" | "Weeks" | "Months"
  duration: "Never Ends" | "Customize"
  billingCycles: string
}

const SubscriptionForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    initialPrice: "",
    billingFrequency: 1,
    billingPeriod: "Months",
    paymentAmount: "",
    trialPeriod: 0,
    trialUnit: "None",
    duration: "Never Ends",
    billingCycles: "",
  })

  const [description, setDescription] = useState<string>("")

  useEffect(() => {
    updateDescription()
  }, [formData])

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    if (name === "initialPrice" && formData.paymentAmount === "") {
      setFormData((prev) => ({ ...prev, paymentAmount: value }))
    }
  }

  const updateDescription = () => {
    const {
      initialPrice,
      billingFrequency,
      billingPeriod,
      paymentAmount,
      trialPeriod,
      trialUnit,
      duration,
      billingCycles,
    } = formData

    let desc = ""

    if (initialPrice && paymentAmount) {
      if (trialUnit !== "None" && trialPeriod) {
        desc += `Your customer will be charged $${initialPrice} immediately for their ${trialPeriod} ${trialUnit.toLowerCase()} trial, and then `
      } else {
        desc += `Your customer will be charged $${initialPrice} immediately and then `
      }

      desc += `$${paymentAmount} every ${billingFrequency} ${billingPeriod.toLowerCase()}`

      if (duration === "Never Ends") {
        desc += " until they cancel."
      } else if (billingCycles) {
        const totalAmount =
          parseFloat(initialPrice) +
          parseFloat(paymentAmount) * parseInt(billingCycles)
        desc += `, ${billingCycles} times. The total amount paid will be $${totalAmount.toFixed(
          2
        )}.`
      }
    }

    setDescription(desc)
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-6">Set up your subscription</h2>

      <div className="space-y-4">
        <div>
          <Label htmlFor="initialPrice">Initial Price</Label>
          <Input
            type="number"
            id="initialPrice"
            name="initialPrice"
            value={formData.initialPrice}
            onChange={handleInputChange}
            min="0"
            step="0.01"
          />
        </div>

        <div className="flex space-x-2">
          <div className="w-1/3">
            <Label htmlFor="billingFrequency">Billing Frequency</Label>
            <Input
              type="number"
              id="billingFrequency"
              name="billingFrequency"
              value={formData.billingFrequency}
              onChange={handleInputChange}
              min="1"
              required
            />
          </div>
          <div className="w-2/3">
            <Label htmlFor="billingPeriod">Period</Label>
            <Select
              id="billingPeriod"
              name="billingPeriod"
              value={formData.billingPeriod}
              onChange={handleInputChange}
            >
              <option value="Months">Months</option>
              <option value="Weeks">Weeks</option>
              <option value="Days">Days</option>
            </Select>
          </div>
        </div>

        <div>
          <Label htmlFor="paymentAmount">{`${formData.billingPeriod.slice(
            0,
            -1
          )}ly Payment`}</Label>
          <Input
            type="number"
            id="paymentAmount"
            name="paymentAmount"
            value={formData.paymentAmount}
            onChange={handleInputChange}
            min="0"
            step="0.01"
            required
          />
        </div>

        <div className="flex space-x-2">
          <div className="w-1/3">
            <Label htmlFor="trialPeriod">Trial Period</Label>
            <Input
              type="number"
              id="trialPeriod"
              name="trialPeriod"
              value={formData.trialPeriod}
              onChange={handleInputChange}
              min="0"
              disabled={formData.trialUnit === "None"}
            />
          </div>
          <div className="w-2/3">
            <Label htmlFor="trialUnit">Unit</Label>
            <Select
              id="trialUnit"
              name="trialUnit"
              value={formData.trialUnit}
              onChange={handleInputChange}
            >
              <option value="None">None</option>
              <option value="Days">Days</option>
              <option value="Weeks">Weeks</option>
              <option value="Months">Months</option>
            </Select>
          </div>
        </div>

        <div>
          <Label htmlFor="duration">Duration</Label>
          <Select
            id="duration"
            name="duration"
            value={formData.duration}
            onChange={handleInputChange}
          >
            <option value="Never Ends">Never Ends</option>
            <option value="Customize">Customize</option>
          </Select>
        </div>

        {formData.duration === "Customize" && (
          <div>
            <Label htmlFor="billingCycles">Billing Cycles</Label>
            <Input
              type="number"
              id="billingCycles"
              name="billingCycles"
              value={formData.billingCycles}
              onChange={handleInputChange}
              min="1"
              required
            />
          </div>
        )}
      </div>

      <div className="mt-6 p-4 bg-gray-100 rounded">
        <p className="text-sm">{description}</p>
      </div>
    </div>
  )
}

export default SubscriptionForm
