import React, { useState } from 'react';
import { Code, Copy, CheckCircle, Zap, Shield, Globe } from 'lucide-react';

const API = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const codeExamples = {
    curl: `curl -X POST "https://api.emailverifier.com/v1/verify" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"email": "user@example.com"}'`,
    
    javascript: `const response = await fetch('https://api.emailverifier.com/v1/verify', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ email: 'user@example.com' })
});

const result = await response.json();
console.log(result);`,

    python: `import requests

url = "https://api.emailverifier.com/v1/verify"
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}
data = {"email": "user@example.com"}

response = requests.post(url, headers=headers, json=data)
result = response.json()
print(result)`,

    response: `{
  "email": "user@example.com",
  "valid": true,
  "deliverable": true,
  "disposable": false,
  "role_account": false,
  "free_provider": false,
  "mx_records": true,
  "smtp_check": true,
  "confidence_score": 0.98,
  "processing_time_ms": 87
}`
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Email Verification API
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Integrate our powerful email verification service into your applications with our simple REST API. 
              Get real-time validation results with 99.9% accuracy.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="flex justify-center mb-4">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold mb-2">Under 100ms</h3>
              <p className="text-blue-100">Average Response Time</p>
            </div>
            <div>
              <div className="flex justify-center mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold mb-2">99.9%</h3>
              <p className="text-blue-100">Accuracy Rate</p>
            </div>
            <div>
              <div className="flex justify-center mb-4">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold mb-2">Global</h3>
              <p className="text-blue-100">Infrastructure</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Start */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Start</h2>
          <p className="text-lg text-gray-600">Get started with our API in minutes</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* cURL Example */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <Code className="w-5 h-5 mr-2" />
                cURL
              </h3>
              <button
                onClick={() => copyToClipboard(codeExamples.curl, 'curl')}
                className="flex items-center text-sm text-gray-500 hover:text-gray-700"
              >
                {copiedCode === 'curl' ? (
                  <CheckCircle className="w-4 h-4 mr-1 text-green-500" />
                ) : (
                  <Copy className="w-4 h-4 mr-1" />
                )}
                {copiedCode === 'curl' ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
              <code>{codeExamples.curl}</code>
            </pre>
          </div>

          {/* JavaScript Example */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <Code className="w-5 h-5 mr-2" />
                JavaScript
              </h3>
              <button
                onClick={() => copyToClipboard(codeExamples.javascript, 'javascript')}
                className="flex items-center text-sm text-gray-500 hover:text-gray-700"
              >
                {copiedCode === 'javascript' ? (
                  <CheckCircle className="w-4 h-4 mr-1 text-green-500" />
                ) : (
                  <Copy className="w-4 h-4 mr-1" />
                )}
                {copiedCode === 'javascript' ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
              <code>{codeExamples.javascript}</code>
            </pre>
          </div>

          {/* Python Example */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <Code className="w-5 h-5 mr-2" />
                Python
              </h3>
              <button
                onClick={() => copyToClipboard(codeExamples.python, 'python')}
                className="flex items-center text-sm text-gray-500 hover:text-gray-700"
              >
                {copiedCode === 'python' ? (
                  <CheckCircle className="w-4 h-4 mr-1 text-green-500" />
                ) : (
                  <Copy className="w-4 h-4 mr-1" />
                )}
                {copiedCode === 'python' ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
              <code>{codeExamples.python}</code>
            </pre>
          </div>

          {/* Response Example */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <Code className="w-5 h-5 mr-2" />
                Response
              </h3>
              <button
                onClick={() => copyToClipboard(codeExamples.response, 'response')}
                className="flex items-center text-sm text-gray-500 hover:text-gray-700"
              >
                {copiedCode === 'response' ? (
                  <CheckCircle className="w-4 h-4 mr-1 text-green-500" />
                ) : (
                  <Copy className="w-4 h-4 mr-1" />
                )}
                {copiedCode === 'response' ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <pre className="bg-gray-900 text-blue-400 p-4 rounded-lg overflow-x-auto text-sm">
              <code>{codeExamples.response}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* API Endpoints */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">API Endpoints</h2>
            <p className="text-lg text-gray-600">Complete reference for all available endpoints</p>
          </div>

          <div className="space-y-8">
            {/* Single Email Verification */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mr-3">
                  POST
                </span>
                <code className="text-lg font-mono">/v1/verify</code>
              </div>
              <p className="text-gray-600 mb-4">Verify a single email address</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Parameters</h4>
                  <ul className="space-y-2 text-sm">
                    <li><code className="bg-gray-200 px-2 py-1 rounded">email</code> - Email address to verify</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Response Fields</h4>
                  <ul className="space-y-2 text-sm">
                    <li><code className="bg-gray-200 px-2 py-1 rounded">valid</code> - Email format validity</li>
                    <li><code className="bg-gray-200 px-2 py-1 rounded">deliverable</code> - Can receive emails</li>
                    <li><code className="bg-gray-200 px-2 py-1 rounded">confidence_score</code> - Accuracy score (0-1)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Bulk Email Verification */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-3">
                  POST
                </span>
                <code className="text-lg font-mono">/v1/verify/bulk</code>
              </div>
              <p className="text-gray-600 mb-4">Verify multiple email addresses at once</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Parameters</h4>
                  <ul className="space-y-2 text-sm">
                    <li><code className="bg-gray-200 px-2 py-1 rounded">emails</code> - Array of email addresses</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Limits</h4>
                  <ul className="space-y-2 text-sm">
                    <li>Maximum 1,000 emails per request</li>
                    <li>Asynchronous processing for large batches</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Authentication */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Authentication</h2>
            <p className="text-lg text-gray-600">Secure your API requests with Bearer tokens</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">API Key</h3>
                <p className="text-gray-600 mb-4">
                  Include your API key in the Authorization header of every request:
                </p>
                <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
                  <code>Authorization: Bearer YOUR_API_KEY</code>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Rate Limits</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Free Plan: 100 requests per day</li>
                  <li>• Starter Plan: 10,000 requests per month</li>
                  <li>• Pro Plan: 100,000 requests per month</li>
                  <li>• Enterprise: Custom limits available</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Get Started CTA */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Sign up for free and get your API key instantly. No credit card required.
          </p>
          <div className="space-x-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get API Key
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              View Documentation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default API;