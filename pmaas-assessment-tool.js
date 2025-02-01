;(() => {
  const React = window.React
  const ReactDOM = window.ReactDOM
  const {
    Button,
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    Input,
  } = window.ShadcnUi
  const { Loader2 } = window.LucideReact

  const PmaasIcon = () =>
    React.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      React.createElement("path", {
        d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
      }),
      React.createElement("polyline", { points: "3.27 6.96 12 12.01 20.73 6.96" }),
      React.createElement("line", { x1: "12", y1: "22.08", x2: "12", y2: "12" }),
    )

  const HybridIcon = () =>
    React.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      React.createElement("path", {
        d: "M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10",
      }),
      React.createElement("line", { x1: "1", y1: "1", x2: "23", y2: "23" }),
    )

  const InternalTeamIcon = () =>
    React.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      React.createElement("path", { d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" }),
      React.createElement("circle", { cx: "9", cy: "7", r: "4" }),
      React.createElement("path", { d: "M23 21v-2a4 4 0 0 0-3-3.87" }),
      React.createElement("path", { d: "M16 3.13a4 4 0 0 1 0 7.75" }),
    )

  const PMaaSAssessmentTool = () => {
    const [responses, setResponses] = React.useState({
      projectComplexity: null,
      annualProjectVolume: null,
      internalExpertise: null,
      budgetFlexibility: null,
      projectDuration: null,
      skillSpecialization: null,
      resourceAvailability: null,
      resourceScalability: null,
      speedImmediate: null,
      speedCriticalExecution: null,
      riskCompliance: null,
      riskManagementCapability: null,
      technologyExpertise: null,
      technologyOpenness: null,
      engagementShortTerm: null,
      engagementConsistency: null,
    })

    const [result, setResult] = React.useState(null)
    const [email, setEmail] = React.useState("")
    const [isSending, setIsSending] = React.useState(false)

    const questions = [
      {
        id: "projectComplexity",
        text: "How complex are your typical projects?",
        type: "dropdown",
        options: [
          { text: "Routine projects", value: 1, weight: 0.2 },
          { text: "Moderate", value: 2, weight: 0.3 },
          { text: "Highly complex", value: 3, weight: 0.5 },
        ],
      },
      {
        id: "annualProjectVolume",
        text: "How many projects do you manage annually?",
        type: "dropdown",
        options: [
          { text: "1-5", value: 1, weight: 0.2 },
          { text: "6-10", value: 2, weight: 0.3 },
          { text: "10+", value: 3, weight: 0.5 },
        ],
      },
      {
        id: "internalExpertise",
        text: "Rate your internal project management expertise:",
        type: "dropdown",
        options: [
          { text: "Basic", value: 1, weight: 0.3 },
          { text: "Intermediate", value: 2, weight: 0.3 },
          { text: "Expert", value: 3, weight: 0.4 },
        ],
      },
      {
        id: "budgetFlexibility",
        text: "How flexible is your project management budget?",
        type: "dropdown",
        options: [
          { text: "Tight", value: 1, weight: 0.3 },
          { text: "Moderate", value: 2, weight: 0.3 },
          { text: "Flexible", value: 3, weight: 0.4 },
        ],
      },
      {
        id: "projectDuration",
        text: "What is the typical duration of your projects?",
        type: "dropdown",
        options: [
          { text: "<3 months", value: 1, weight: 0.2 },
          { text: "3-12 months", value: 2, weight: 0.3 },
          { text: "12+ months", value: 3, weight: 0.5 },
        ],
      },
      {
        id: "skillSpecialization",
        text: "Do you need specialized industry knowledge for project success?",
        type: "binary",
        options: [
          { text: "Yes", value: "pmaas", weight: 0.5 },
          { text: "No", value: "traditional", weight: 0.5 },
        ],
      },
      {
        id: "resourceAvailability",
        text: "Do you have enough internal project management resources?",
        type: "binary",
        options: [
          { text: "Yes", value: "traditional", weight: 0.5 },
          { text: "No", value: "pmaas", weight: 0.5 },
        ],
      },
      {
        id: "resourceScalability",
        text: "Can you easily scale your team up or down based on project demands?",
        type: "binary",
        options: [
          { text: "Yes", value: "traditional", weight: 0.5 },
          { text: "No", value: "pmaas", weight: 0.5 },
        ],
      },
      {
        id: "speedImmediate",
        text: "Do you need project managers who can start immediately?",
        type: "binary",
        options: [
          { text: "Yes", value: "pmaas", weight: 0.5 },
          { text: "No", value: "traditional", weight: 0.5 },
        ],
      },
      {
        id: "speedCriticalExecution",
        text: "How critical is quick project execution for your business?",
        type: "binary",
        options: [
          { text: "High", value: "pmaas", weight: 0.5 },
          { text: "Low", value: "traditional", weight: 0.5 },
        ],
      },
      {
        id: "riskCompliance",
        text: "Do your projects require strict compliance, security, or confidentiality?",
        type: "binary",
        options: [
          { text: "Yes", value: "traditional", weight: 0.5 },
          { text: "No", value: "pmaas", weight: 0.5 },
        ],
      },
      {
        id: "riskManagementCapability",
        text: "How well does your current team manage project risks and crisis situations?",
        type: "binary",
        options: [
          { text: "High", value: "traditional", weight: 0.5 },
          { text: "Low", value: "pmaas", weight: 0.5 },
        ],
      },
      {
        id: "technologyExpertise",
        text: "Do you have in-house expertise in modern project management tools and automation?",
        type: "binary",
        options: [
          { text: "Yes", value: "traditional", weight: 0.5 },
          { text: "No", value: "pmaas", weight: 0.5 },
        ],
      },
      {
        id: "technologyOpenness",
        text: "Are you open to leveraging external tools and methodologies for better project execution?",
        type: "binary",
        options: [
          { text: "Yes", value: "pmaas", weight: 0.5 },
          { text: "No", value: "traditional", weight: 0.5 },
        ],
      },
      {
        id: "engagementShortTerm",
        text: "Do you need project management for a single or short-term project?",
        type: "binary",
        options: [
          { text: "Yes", value: "pmaas", weight: 0.5 },
          { text: "No", value: "traditional", weight: 0.5 },
        ],
      },
      {
        id: "engagementConsistency",
        text: "Is long-term consistency in project management a top priority?",
        type: "binary",
        options: [
          { text: "Yes", value: "traditional", weight: 0.5 },
          { text: "No", value: "pmaas", weight: 0.5 },
        ],
      },
    ]

    const handleOptionSelect = (questionId, value) => {
      setResponses((prev) => ({
        ...prev,
        [questionId]: value,
      }))
    }

    const calculateScore = () => {
      let pmaasScore = 0
      let traditionalScore = 0

      Object.entries(responses).forEach(([key, value]) => {
        const question = questions.find((q) => q.id === key)
        const selectedOption = question.options.find((opt) => opt.value === value)

        if (selectedOption) {
          if (selectedOption.value === "pmaas") pmaasScore += selectedOption.weight
          if (selectedOption.value === "traditional") traditionalScore += selectedOption.weight
          if (typeof selectedOption.value === "number") {
            pmaasScore += selectedOption.weight
          }
        }
      })

      const totalQuestions = Object.keys(responses).length
      const pmaasPercentage = (pmaasScore / (totalQuestions * 0.5)) * 100

      return pmaasPercentage
    }

    const determineRecommendation = () => {
      const pmaasPercentage = calculateScore()

      if (pmaasPercentage < 40) {
        return {
          type: "PMaaS",
          description: "Suggests high external support needed.",
          recommendation: "Recommend Project Management as a Service (PMaaS)",
          icon: React.createElement(PmaasIcon),
        }
      } else if (pmaasPercentage < 70) {
        return {
          type: "Hybrid",
          description: "Recommends a mixed approach combining internal and external resources.",
          recommendation: "Consider Hybrid Project Management Approach",
          icon: React.createElement(HybridIcon),
        }
      } else {
        return {
          type: "Internal Team",
          description: "Indicates strong internal project management capabilities.",
          recommendation: "Recommend Internal Project Management Team",
          icon: React.createElement(InternalTeamIcon),
        }
      }
    }

    const submitAssessment = () => {
      const allQuestionsAnswered = Object.values(responses).every((response) => response !== null)

      if (allQuestionsAnswered) {
        const recommendation = determineRecommendation()
        setResult(recommendation)
      } else {
        alert("Please answer all questions before submitting.")
      }
    }

    const resetAssessment = () => {
      setResponses(Object.keys(responses).reduce((acc, key) => ({ ...acc, [key]: null }), {}))
      setResult(null)
      setEmail("")
    }

    const sendResultsByEmail = async () => {
      setIsSending(true)
      try {
        // Assuming pmaasData is available in the global scope or passed as a prop
        const response = await fetch(pmaasData.ajax_url, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            action: "send_assessment_email",
            nonce: pmaasData.nonce,
            email: email,
            result: JSON.stringify(result),
          }),
        })

        const data = await response.json()

        if (data.success) {
          alert("Assessment results sent successfully!")
        } else {
          throw new Error(data.data || "Failed to send email")
        }
      } catch (error) {
        console.error("Error sending email:", error)
        alert("Failed to send email. Please try again.")
      } finally {
        setIsSending(false)
      }
    }

    return React.createElement(
      Card,
      { className: "w-full max-w-4xl mx-auto" },
      React.createElement(CardHeader, null, React.createElement(CardTitle, null, "Project Management Assessment Tool")),
      React.createElement(
        CardContent,
        null,
        !result
          ? React.createElement(
              "div",
              null,
              questions.map((question) =>
                React.createElement(
                  "div",
                  { key: question.id, className: "mb-6" },
                  React.createElement("p", { className: "font-medium mb-2" }, question.text),
                  question.type === "dropdown"
                    ? React.createElement(
                        Select,
                        {
                          onValueChange: (value) => handleOptionSelect(question.id, Number.parseInt(value)),
                        },
                        React.createElement(
                          SelectTrigger,
                          { className: "w-full" },
                          React.createElement(SelectValue, {
                            placeholder: "Select an option",
                          }),
                        ),
                        React.createElement(
                          SelectContent,
                          null,
                          question.options.map((option) =>
                            React.createElement(
                              SelectItem,
                              {
                                key: option.value,
                                value: option.value.toString(),
                              },
                              option.text,
                            ),
                          ),
                        ),
                      )
                    : React.createElement(
                        "div",
                        { className: "grid grid-cols-2 gap-2" },
                        question.options.map((option) =>
                          React.createElement(
                            Button,
                            {
                              key: option.text,
                              variant: responses[question.id] === option.value ? "default" : "outline",
                              onClick: () => handleOptionSelect(question.id, option.value),
                              className: "w-full",
                            },
                            option.text,
                          ),
                        ),
                      ),
                ),
              ),
            )
          : React.createElement(
              "div",
              { className: "text-center" },
              React.createElement(
                "div",
                { className: "flex items-center justify-center mb-4" },
                result.icon,
                React.createElement("h2", { className: "text-2xl font-bold ml-4" }, result.recommendation),
              ),
              React.createElement("p", { className: "text-lg mb-4" }, result.description),
              React.createElement(
                "div",
                { className: "bg-blue-50 p-4 rounded-lg mb-6" },
                React.createElement(
                  "div",
                  { className: "flex items-center justify-center mb-2" },
                  result.type === "PMaaS" && React.createElement(PmaasIcon),
                  result.type === "Hybrid" && React.createElement(HybridIcon),
                  result.type === "Internal Team" && React.createElement(InternalTeamIcon),
                  React.createElement("h3", { className: "font-semibold ml-2" }, "Recommended Approach: ", result.type),
                ),
                result.type === "PMaaS" &&
                  React.createElement(
                    "p",
                    null,
                    "Best for organizations needing flexible, immediate project management support.",
                  ),
                result.type === "Hybrid" &&
                  React.createElement(
                    "p",
                    null,
                    "Balances internal capabilities with external project management expertise.",
                  ),
                result.type === "Internal Team" &&
                  React.createElement(
                    "p",
                    null,
                    "Ideal for organizations with robust internal project management infrastructure.",
                  ),
              ),
              React.createElement(
                "div",
                { className: "flex items-center space-x-2" },
                React.createElement(Input, {
                  type: "email",
                  placeholder: "Enter your email",
                  value: email,
                  onChange: (e) => setEmail(e.target.value),
                  className: "flex-grow",
                }),
                React.createElement(
                  Button,
                  {
                    onClick: sendResultsByEmail,
                    disabled: !email || isSending,
                  },
                  isSending
                    ? React.createElement(
                        React.Fragment,
                        null,
                        React.createElement(Loader2, {
                          className: "mr-2 h-4 w-4 animate-spin",
                        }),
                        "Sending",
                      )
                    : "Send Results",
                ),
              ),
            ),
      ),
      React.createElement(
        CardFooter,
        { className: "flex justify-between" },
        !result
          ? React.createElement(
              Button,
              {
                onClick: submitAssessment,
                disabled: Object.values(responses).some((response) => response === null),
              },
              "Get Recommendation",
            )
          : React.createElement(Button, { variant: "outline", onClick: resetAssessment }, "Retake Assessment"),
      ),
    )
  }

  ReactDOM.createRoot(document.getElementById("pmaas-assessment-container")).render(
    React.createElement(PMaaSAssessmentTool),
  )
})()

