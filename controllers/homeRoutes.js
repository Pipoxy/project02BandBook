const router = require('express').Router();

// get all posts for homepage
router.get('/', async (req, res) => {
  try {


    res.render('login');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/profile', async (req, res) => {
    try {
  
  
      res.render('profile');
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/workout', async (req, res) => {
    try {
  
  
      res.render('workout');
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;