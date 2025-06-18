import express from 'express'
import { Liquid } from 'liquidjs'

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))

const engine = new Liquid()
app.engine('liquid', engine.express())
app.set('views', './views')

// ----------------------------------------------- LOGIN -----------------------------------------------//
app.get('/login', async (req, res) => {
  res.render('login.liquid')
})

// ----------------------------------------------- HOMEPAGE -----------------------------------------------//
app.get('/', async (req, res) => {
    try {
        const roleRes = await fetch('https://fdnd-fresk-api.netlify.app/get-role');
        const response = await roleRes.json();
        const role = response.role; 
        
        const contentRes = await fetch(`https://fdnd-fresk-api.netlify.app/get-content-by-role?userRole=${role}`);
        const content = await contentRes.json();
        
        res.render('dashboard.liquid', { role, content });
    } catch (error) {
        console.error('API Error:', error);
        res.status(500).render('500.liquid', { message: 'Failed to load dashboard' });
    }
});

// ----------------------------------------------- ROLE HANDLING -----------------------------------------------//

// 1. Krijg een random role nadat op de submit word geklikt

// 2. Krijg content voor die role

// 3. Render dashboard

app.post('/submit-pin', async (req, res) => {
    try {
        const roleRes = await fetch('https://fdnd-fresk-api.netlify.app/get-role');
        const response = await roleRes.json();
        const role = response.role; 

        const contentRes = await fetch(`https://fdnd-fresk-api.netlify.app/get-content-by-role?userRole=${role}`);
        const content = await contentRes.json();
        
        res.redirect('/');
    } catch (error) {
        console.error('API Error:', error);
        res.status(500).render('500.liquid', { message: 'Failed to load dashboard' });
    }
});
// ----------------------------------------------- Server Start -----------------------------------------------//
app.listen(process.env.PORT || 8000, () => {
  console.log(`Server running on http://localhost:${process.env.PORT || 8000}`)
})