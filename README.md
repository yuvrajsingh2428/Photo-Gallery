# Photo Gallery Application

A responsive and modern infinite scroll photo gallery built with React, Tailwind CSS, and the Unsplash API. The application dynamically loads photos and supports smooth animations for an interactive user experience.

## Live Site

Visit the live version of the application: [Photo Gallery](https://photo-gallery-eosin-mu.vercel.app/)

## Features

- **Infinite Scroll:** Dynamically fetch and display photos as the user scrolls.
- **Responsive Design:** Optimized for all devices with grid layouts adjusting seamlessly.
- **Hover Effects:** Smooth image zoom and flipping animations on hover.
- **Photographer Details:** Display photographer's name and location under each photo.
- **Error Handling:** Displays a friendly message when the API fails to fetch data.
- **Loading Indicator:** A spinner appears while fetching new images.

## Technologies Used

- **Frontend Framework:** React
- **Styling:** Tailwind CSS
- **API Integration:** Unsplash API
- **Deployment:** Vercel

## Screenshots

Include these in the repository:
1. Home Page view on desktop.
2. Infinite scroll behavior on mobile.
3. Hover effects in action.

## Getting Started

Follow these steps to install and run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/yuvrajsingh2428/Photo-Gallery.git
cd Photo-Gallery

2. Install Dependencies
    
    npm install

3. Set Up Environment Variables

Create a .env file in the root directory and add the following:

    REACT_APP_UNSPLASH_ACCESS_KEY=Your_UNSPLASH_API

4. Start the Development Server
     
     npm start

Open http://localhost:3000 in your browser.

Deployment
The project is deployed on Vercel. To deploy your version:

1. Link your GitHub repository to Vercel.
2. Set up the same .env file in the Vercel environment settings.
3. Deploy!


Advanced Features

1. Hover Flip Animation: Cards flip to reveal image details on hover.
2. Smooth Transitions: Tailwind CSS animations enhance user experience.
3. Lazy Loading: Images are fetched in batches of 9 to optimize performance.







