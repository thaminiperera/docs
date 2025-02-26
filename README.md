# Real-Time Document Editing & Collaboration Platform

This system provides a fluid, responsive, and feature-rich document editing and collaboration environment. It offers a modern alternative to traditional tools like Google Docs, enabling users to create, edit, and collaborate on documents in real-time with minimal latency. The platform is highly customizable, catering to the evolving needs of modern users.

Application Demo :  https://docs-five-orpin.vercel.app

---

## Key Features

- **Real-time Document Collaboration:** Multiple users can collaborate seamlessly with real-time updates, live cursor tracking, and synchronized changes.
- **Customizable Document Editing:** Features a flexible text editor with support for advanced formatting, tables, task lists, image embedding, and more.
- **Secure Authentication & Access Management:** Ensures secure logins, user authentication, and organizational access control.
- **Template Library:** A variety of pre-designed templates (business letters, resumes, etc.) for easier document creation.
- **Dynamic UI:** Intuitive and responsive user interface optimized for multiple devices.

---

## Technologies & Services

- **TipTap Editor:** A rich-text editor supporting customizable text formatting and advanced features like tables, image embedding, task lists, and more.
- **Liveblocks:** Enables real-time synchronization, user presence tracking, and collaboration features such as comments and mentions.
- **Clerk:** A secure authentication service for managing user logins and access control.
- **Convex:** A backend-as-a-service solution for real-time data storage and synchronization across multiple users.
- **Next.js:** For server-side rendering and fast performance.
- **Tailwind CSS & Shadcn:** For modern, responsive UI design.
- **Lucide-react & React-Icons:** Clear and intuitive iconography.
- **Toast:** For smooth, non-intrusive notifications.

---

## Key Features in Detail

### **Rich Text Editor: TipTap Integration**

- **Core Configuration:** Initialized with `useEditor` from `@tiptap/react` for optimal performance.
- **Extensions Included:**
  - **StarterKit:** Provides basic editing capabilities.
  - **Advanced Styling:** Options for underline, text style, font family, color, and highlighting.
  - **Table Support:** Create dynamic tables (cells, headers, rows).
  - **Image and Task List Support:** Embed and resize images, manage task lists.
  - **Text Alignment & Links:** Multiple text alignment options and seamless link embedding.
  - **Custom Extensions:** Font size, line height, and other advanced text features.

### **Real-Time Collaboration with Liveblocks**

- **Presence API:** Tracks user cursor positions in real-time.
- **Storage API:** Syncs document data, including margins and formatting.
- **User Meta:** Displays user-specific details like name, avatar, and cursor color.
- **Interactive Collaboration:** Supports threaded comments, mentions, and live cursor tracking.
- **React Suspense Integration:** Provides a smooth loading experience while the editor is initialized.

### **Backend & Authentication**

- **Convex:** Manages document data, including titles, content, and real-time updates.
- **Clerk:** Handles user authentication and access control, ensuring secure document sharing and editing.

### **Document Templates**

- A variety of pre-designed templates, such as business letters and resumes, are available for quick document creation.
- The platform includes drag-and-drop margin controls and a dynamic ruler for precise layout adjustments.

---

## UI Enhancements

- **Responsive Design:** Built with Tailwind CSS and Shadcn, ensuring a seamless user experience across various devices and screen sizes.
- **Avatars:** Real-time display of user avatars for better collaboration tracking.
- **Navbar:** A user-friendly navigation bar for managing documents, including options to create, rename, delete, and export documents in formats such as PDF, HTML, and TXT.
- **Toolbar:** A customizable toolbar for text formatting, including bold, italics, font size, color, alignment, undo/redo, and spellcheck.

---

## Tech Stack

- **Frontend:**  
  - **Next.js**: For server-side rendering and fast load times.  
  - **Tailwind CSS & Shadcn**: For responsive and stylish UI.  
  - **Lucide-react & React-Icons**: For intuitive and clear iconography.  
  - **Toast**: For user notifications.  

- **Backend:**  
  - **Convex**: For real-time database and API synchronization.

- **Collaboration:**  
  - **Liveblocks**: For real-time collaboration and presence tracking.

- **Authentication:**  
  - **Clerk**: For secure user authentication and access management.

---

## Deployment

The entire platform is deployed on **Vercel** at  https://docs-five-orpin.vercel.app



