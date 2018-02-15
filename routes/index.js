import express from 'express';
import BattleController from '../controllers/BattleController'

const router = express.Router();
const battleController = new BattleController();

router.get('/', function(req, res, next) {
    res.json({ status: 'success', data: 'welcome' });
});
router.get('/list', battleController.getDistinctLocation);
router.get('/count', battleController.getBattleCount);
router.get('/stats', battleController.getBattleStats);
router.get('/search', battleController.getSearchResults);

module.exports = router;
