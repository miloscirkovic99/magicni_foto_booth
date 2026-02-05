# Contact Form API Integration Documentation

## Overview
The contact form is now fully integrated with API endpoints using best practices with axios, custom hooks, and proper error handling.

## Files Added/Modified

### 1. **API Service Layer** (`src/shared/api/contactService.ts`)
- Centralized axios instance with base configuration
- Singleton pattern for consistency
- Interceptors for error handling
- Type-safe API calls

**Features:**
- Configurable base URL via environment variable (`VITE_API_BASE_URL`)
- 10-second request timeout
- Automatic error parsing and transformation
- Request/response interceptors for future middleware

### 2. **Custom Hook** (`src/app/hooks/useContactFormSubmit.ts`)
- Manages form submission state (loading, error, success)
- Handles API integration with contact service
- Auto-reset success message after 5 seconds
- Proper error handling and logging

**Returns:**
- `isLoading`: Boolean indicating submission state
- `error`: Error object with message and optional field
- `success`: Boolean indicating successful submission
- `submitForm`: Function to submit form data
- `resetState`: Function to reset error/success state

### 3. **Updated Types** (`src/shared/types/index.ts`)
- `CustomFormData`: All form fields (name, phone, email, eventType, message)
- `ContactApiResponse`: API response structure
- `ContactApiError`: Standardized error object

### 4. **Updated Contact Form** (`src/app/components/sections/ContactForm/ContactForm.tsx`)
- Uses new `useContactFormSubmit` hook
- Error and success alerts with auto-dismiss
- Button loading state with disabled state
- Form validation before submission
- Auto-reset on successful submission
- Clear errors when user starts typing

## Environment Setup

### 1. Install Axios (if not already installed)
```bash
npm install axios
# or
yarn add axios
```

### 2. Create `.env.local` file
Copy from `.env.example`:
```
VITE_API_BASE_URL=http://localhost:3000/api
```

Update the URL to your actual API endpoint.

## API Endpoint Expected

The service expects a POST endpoint at:
```
POST {VITE_API_BASE_URL}/contact
```

### Request Body
```json
{
  "name": "string",
  "phone": "string",
  "email": "string",
  "eventType": "string",
  "message": "string"
}
```

### Expected Response (Success)
```json
{
  "success": true,
  "message": "Form submitted successfully",
  "data": { /* form data */ }
}
```

### Expected Response (Error)
```json
{
  "message": "Error description",
  "field": "fieldName" // optional, specific field that failed validation
}
```

## Usage Example

The ContactForm component now automatically uses the hook and handles:
- Form submission
- Loading state (button disabled, text changes)
- Success feedback (auto-dismissing alert)
- Error feedback (user-dismissable alert)
- Form reset on success

## Best Practices Implemented

✅ **Separation of Concerns**
- API logic in separate service class
- Hook manages state and orchestration
- Component focuses on UI

✅ **Type Safety**
- Full TypeScript types for all data structures
- API responses and errors typed

✅ **Error Handling**
- Centralized error handling in service
- Field-specific error support
- User-friendly error messages

✅ **Performance**
- Memoized callbacks with useCallback
- Singleton service instance
- Auto-cleanup of success messages

✅ **UX**
- Loading states with visual feedback
- Non-intrusive auto-dismiss alerts
- Form clearing on success
- Error clearing on user input

✅ **Scalability**
- Easy to add more API endpoints to contactService
- Hook pattern allows reuse in other forms
- Extensible error and response types

## Future Enhancements

- Add request debouncing for rapid submissions
- Add form field validation hook
- Add retry logic with exponential backoff
- Add analytics tracking for submissions
- Add email verification before submission
