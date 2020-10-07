"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ProductRepository_1 = __importDefault(require("../repositories/ProductRepository"));
var typeorm_1 = require("typeorm");
var CreateProductService_1 = __importDefault(require("../services/CreateProductService"));
var productsRouter = express_1.Router();
//Cria um novo produto
productsRouter.post('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name_1, description, value, productRepository, createProduct, product, err_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, name_1 = _a.name, description = _a.description, value = _a.value;
                productRepository = typeorm_1.getCustomRepository(ProductRepository_1.default);
                createProduct = new CreateProductService_1.default(productRepository);
                return [4 /*yield*/, createProduct.execute({ name: name_1, description: description, value: value })];
            case 1:
                product = _b.sent();
                return [2 /*return*/, res.json(product)];
            case 2:
                err_1 = _b.sent();
                return [2 /*return*/, res.status(400).json({ error: err_1.message })];
            case 3: return [2 /*return*/];
        }
    });
}); });
//Lista todos os produtos
productsRouter.get('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var productRepository, products, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                productRepository = typeorm_1.getCustomRepository(ProductRepository_1.default);
                return [4 /*yield*/, productRepository.find()];
            case 1:
                products = _a.sent();
                return [2 /*return*/, res.json(products)];
            case 2:
                err_2 = _a.sent();
                return [2 /*return*/, res.status(400).json({ error: err_2.message })];
            case 3: return [2 /*return*/];
        }
    });
}); });
//Lista o produto que tem o name enviado por paramentro
productsRouter.get('/filterList', function (req, res) {
    try {
        var name_2 = req.body.name;
        var productRepository = typeorm_1.getCustomRepository(ProductRepository_1.default);
        var product = productRepository.filterList(name_2);
        return res.json(product);
    }
    catch (err) {
        return res.status(400).json({ error: err.message });
    }
});
// //Atualiza as informações de um produto
// productsRouter.put('/products/:id', update);
// //Atualiza as informações de um produto
// productsRouter.delete('/products/:id', destroy);
exports.default = productsRouter;
