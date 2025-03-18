import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes.tsx'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Toaster } from 'sonner'
import DialogStateProvider from './provider/DialogStateProvider.tsx'


// Create a client
export const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <DialogStateProvider>
        <RouterProvider router={router} />
        <Toaster />
      </DialogStateProvider>
    </QueryClientProvider>
  </StrictMode>,
)
